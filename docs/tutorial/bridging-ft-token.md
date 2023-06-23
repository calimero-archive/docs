---
title: How to bridge FT tokens from NEAR to Calimero
sidebar_position: 3
---

This tutorial will guide you through the process of bridging fungible tokens from the NEAR Testnet to Calimero and withdrawing the tokens back to the NEAR Testnet.

<div align="center"><iframe width="560" height="315"  src="https://www.youtube.com/embed/l-ekSlLTsOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

## Prerequisites
Before you get started, make sure you have the following:

- [Calimero Console](https://app.calimero.network/dashboard)
- A code editor like [VSCode](https://code.visualstudio.com/download)
- [Calimero Examples Repository](https://github.com/calimero-is-near/calimero-examples) cloned onto your local machine
- [NEAR CLI](https://docs.near.org/tools/near-cli#setup) tool installed
- [NEAR Wallet](https://wallet.near.org/) toolchain installed

## Step 1: Install the FT Connector Bridge

Once you are signed into the Calimero console, set up the FT Connector to enable bridging of FT tokens. Follow the steps provided [here](https://docs.calimero.network/getting_started/bridge_console#ft-connector) to install the FT token bridge.

# Step 2: FT Connector Regex

After installation, you need to provide access to the accounts that want to bridge tokens. This is done by adding regex rules to allow bridging for specific accounts. In this tutorial, we will configure the FT Connector to allow access to all accounts using the `.*` symbol as the regex.

Follow these steps to configure FT Connector regex rules:

1. Go to **Permissions Management** under the Bridge section.

<img width="1329" alt="2-ft-connector-regex" src="https://github.com/calimero-is-near/docs/assets/39309699/d7ed8961-f296-4e01-8545-8035e6ec7eba"/>

2. Click the **Add new rule** button and add `.*` as the regex for the FT Connector rule.
3. Click the **Add new rule** button.

<img width="629" alt="add-regex (1)" src="https://github.com/calimero-is-near/docs/assets/39309699/1cc4e988-b441-4488-8049-2c5466340025"/>

## Step 3: Generate an auth token

Before bridging the FT token, you need to generate a Calimero auth token. This token authenticates and authorizes external applications to communicate with your shard.

Follow the steps provided [here](/docs/getting_started/generate_token.md) to generate an auth token for your Calimero shard.

## Step 4: Sync NEAR account in Calimero Shard

To sync your NEAR account with the Calimero Shard, you need to install the Calimero SDK and set up environment variables.

1. Clone the [Calimero Examples Repository](https://github.com/calimero-is-near/calimero-sdk) onto your local machine.

```bash
git clone https://github.com/calimero-is-near/calimero-sdk.git
```

2. Open the codebase in your preferred code editor.
3. Navigate to the examples folder.

```bash
cd calimero-sdk
cd examples
```

4. Open the `.env` file located in the `simple-login` directory.

5. Update the following variables in the `.env` file:
   - `VITE_CALIMERO_URL`: This is the RPC endpoint, which can be found in the [Calimero console](https://app.calimero.network/dashboard).
   - `VITE_CALIMERO_TOKEN`: This is the auth token you generated earlier.
   
6. Install the necessary dependencies and run the application using the following command.

```bash
yarn install && yarn dev
```

## Step 5: Connect NEAR Wallet with Calimero Shard

1. Open your local host in a web browser.
2. Click the **Login with NEAR** button.
3. Create a new account or import an existing account.
4. Click the **Next** button.
5. Click the **Connect** button.

<img width="488" alt="connects-shards-near" src="https://github.com/calimero-is-near/docs/assets/39309699/e120a739-59b3-4db6-b834-c7870b716b4e"/>

## Step 6: Calling a Contract Function from the CLI

To call a contract function from the CLI, we will first set up our public and private keys and then create JSON files that will be used to call the function.

### Finding the Public Key

1. Go to the [Explorer](https://app.calimero.network/explorer/dashboard) and click on **Transactions**. Here, you can inspect activities such as account creation, transaction types, and added keys.

<img width="1421" alt="explorer" src="https://github.com/calimero-is-near/docs/assets/39309699/2c48334d-60bd-4740-8925-eebaab68058a"/>

2. Locate and click on the **ADD_KEY** transaction from your synced account.
3. Open the **Execution Plan** tab.
4. Copy the `public_key` from the JSON displayed.

<img width="788" alt="public-key" src="https://github.com/calimero-is-near/docs/assets/39309699/d1c07ddd-ec91-427b-baf1-2e54c8351b1f"/>

### Finding the Private Key

To retrieve your private key, follow these steps:

1. Go to your NEAR wallet.
2. Navigate to the **Accounts** tab.
3. Click on the **Export Local Private Key** button.
4. Enter your address to view the private key.
5. Copy your private key.

<img width="534" alt="private-keys" src="https://github.com/calimero-is-near/docs/assets/39309699/1205fb88-3d88-420b-8736-8698f541cf1e"/>

### Creating a JSON File

Now that we have the public and private keys, let's create a JSON file that will be used for calling the contract function from the CLI.

1. Create a `~/.near-credentials` folder.
2. Create a `.json` file.
3. Copy and paste the following content into the file, replacing the placeholders with your own details:

```json
{
  "account_id": "YOUR_ACCOUNT_ID",
  "public_key": "YOUR_PUBLIC_KEY",
  "private_key": "YOUR_PRIVATE_KEY"
}
```

## Step 7: Setting up an API Key

To interact with your Calimero shard using NEAR CLI, you need to set the token value using the `near set-api-key` command.

Follow the steps provided [here](/interact/cli#set-up-the-near-cli-to-access-the-shard-via-cli) to set up NEAR CLI.

## Step 8: Registering an Account in the FT

First, we need to call `wrap.test` to register the accounts we'll be using in the fungible storage deposit. This step will register the accounts in the fungible token. For this tutorial, we'll be using [Wrap NEAR fungible tokens](https://explorer.testnet.near.org/accounts/wrap.testnet).

The `REGISTER_ACCOUNT_ID` is the account name you receive when you create your NEAR wallet account. You can also use it as the `CALLER_ACCOUNT_ID`. The `CALLER_ACCOUNT_ID` is the account that calls the function, while the `REGISTER_ACCOUNT_ID` is the account that will be registered. The `CALLER_ACCOUNT_ID` can be both the register and the caller.

## Set environmental variables

Before continuing with the next steps, set up your environmental variables in the command line, you can use the export command followed by the variable name and its value.

```bash
export REGISTER_ACCOUNT_ID="YOUR_REGISTER_ACCOUNT_ID"
export CALLER_ACCOUNT_ID="YOUR_CALLER_ACCOUNT_ID"
export SHARD_ID="YOUR_SHARD_ID"
export ACCOUNT_ID="YOUR_ACCOUNT_ID"
```
- Replace `YOUR_REGISTER_ACCOUNT_ID` is the account name you receive when you create your NEAR wallet account
- Replace `YOUR_CALLER_ACCOUNT_ID`  with the account name that calls the function. This can be similar to `REGISTER_ACCOUNT_ID`
- Replace `YOUR_SHARD_ID` with your shard name
- Replace `YOUR_ACCOUNT_ID` with the value of the account ID you want to check the balance for

After setting the environment variables, you can access them in the following commands.

## Step 9: Registering the Account from the Wallet

To register the account from your wallet, run the following code:

```bash
near call wrap.testnet storage_deposit '{"account_id": "$REGISTER_ACCOUNT_ID"}' --accountId $CALLER_ACCOUNT_ID --amount 0.00125
```

### Registering the FT Connector

The FT Connector acts as a locker. From the **FT Connector** section, click on **Calimero Contracts**.

To register the FT Connector, run the following code:

```bash
near call wrap.testnet storage_deposit '{"account_id": "ft_connector.$SHARD_ID.calimero.testnet"}' --accountId $CALLER_ACCOUNT_ID --amount 0.00125
```

### Registering FT token

-  From the FT Connector, click on the **Register FT** button

<img width="1172" alt="registerfttoken" src="https://github.com/calimero-is-near/docs/assets/39309699/eead3441-b373-47e5-b017-952e9c0a3322"/>

-  Enter your FT contract address (in our case, it's `wrap.testnet`)
-  Click on the **Register** button

<img width="430" alt="contractaddress" src="https://github.com/calimero-is-near/docs/assets/39309699/d09c2ef2-05fe-4fa0-b8b4-11bf558d2eab"/>

## Step 10: Swapping NEAR for Wrapped NEAR

To swap your NEAR tokens for Wrapped NEAR, call `near_deposit` and deposit the desired amount of NEAR.

```bash
near call wrap.testnet near_deposit --args '{}' --accountId $CALLER_ACCOUNT_ID --amount 10 --gas 300000000000000
```

## Step 11:  Viewing the balance on NEAR testnet

After swapping your tokens, you can check your balance on the NEAR Testnet using the following method:

```bash
near view wrap.testnet ft_balance_of --args '{"account_id": "$REGISTERED_ACCOUNT_ID"}'
```

## Step 12: Viewing the balance in the FT Connector on the NEAR side

You can also check your balance in the FT Connector by running the following command:

```bash
near view wrap.testnet ft_balance_of --args '{"account_id": "ft_connector.$SHARD_ID.calimero.testnet"}'
```
##  Wrapped Token Naming (`wNEAR`)

When a token is bridged, it is created as a deployer sub-account. The bridged token's name depends on the original token name and the Calimero shard. If the token name exceeds 64 characters, it is hashed using SHA256, and the first characters of the hash are used to create a bridged token name.

## Step 13: Sending Wrapped NEAR to the FT Connector:  locking fungible tokens on NEAR Testnet

When sending Wrapped NEAR `wNEAR` to the FT Connector, the NEAR account acts as a locker on the NEAR side, while on the Calimero side, the account `ft_deployer.` is responsible for minting and distributing tokens to accounts in the shard.

To lock fungible tokens on the NEAR testnet, run the following:

```bash
near call wrap.testnet ft_transfer_call --args '{"receiver_id": "ft_connector.$SHARD_ID", "amount": "1", "msg": ""}' 
--accountId $CALLER_ACCOUNT_ID --depositYocto 1 --gas 300000000000000
```
You can check the list of all transactions in the [console explorer](https://app.calimero.network/explorer/dashboard).

## Step 14: Viewing the FT balance in Calimero Shard to check that withdrawal was successful.

You can check the balance of your account in the Calimero Shard using `wrap.ft_deployer`, which represents the `wrap.testnet` fungible token on the Calimero side.

```bash
calimero $SHARD_ID-calimero-testnet view wrap.ft_deployer.$SHARD_ID.calimero.testnet ft_balance_of --args '{"account_id":"$REGISTERED_ACCOUNT_ID"}'
```

## Step 15: Viewing the FT balance in NEAR to check that withdrawal was successful.

You can also check the balance in your NEAR account using `wrap.testnet` which represents the `wrap.testnet` fungible token on the NEAR side.

```bash
near view wrap.testnet ft_balance_of --args '{"account_id":"$REGISTERED_ACCOUNT_ID"}'
```

## Step 16: Withdrawing FT from Calimero Shard back to NEAR testnet

To retrieve tokens on NEAR Testnet, you need to call the `withdraw` method on the bridged token contract on Calimero. This action burns the tokens on Calimero, and the bridge service verifies the burn event on the FT Connector contract on NEAR. Upon successful verification, the tokens are unlocked on NEAR Testnet.

To withdraw the token on Calimero back to NEAR testnet, run the following:

```bash
calimero $SHARD_ID-calimero-testnet call wrap.ft_deployer.$SHARD_ID.calimero.testnet withdraw --args '{"amount":"345"}' --accountId $CALLER_ACCOUNT_ID --depositYocto 1 --gas 300000000000000
```

You can check the withdrawn token status:

- Select **Explorer** from the left side navigation bar.
- Select **Transactions**.
- Click on a transaction.

<img width="1425" alt="transactions2" src="https://github.com/calimero-is-near/docs/assets/39309699/e7131a08-2c9e-4fe6-b0ff-9a3623543028"/>

## Recap

By following the steps above, you have successfully transferred wrap fungible tokens from NEAR Testnet to the Calimero shard. The tokens were locked in the source `ft_connector` contract, and the bridge service and relayer verified the locking on NEAR Testnet. As a result, wrapped tokens (`wNEAR`) were minted on Calimero. To withdraw tokens back to NEAR Testnet, you can call the `withdraw` method on the bridged token contract on Calimero, which will burn the requested amount of tokens. The bridge service verifies the burn event and releases the tokens back on NEAR Testnet.

