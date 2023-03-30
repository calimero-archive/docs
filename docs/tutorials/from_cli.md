---
title: How to deploy a Voting smart contract Dapp
sidebar_position: 1
---

In this video, we'll be deploying a voting smart contract Dapp on the Calimero Network.

## Prerequisite

To get started, ensure that you have the following:

- Set up your [Calimero account](/docs/getting_started/signup.md)
- A code editor like [VSCode](https://code.visualstudio.com/download)
- The [Calimero examples repository](https://github.com/calimero-is-near/calimero-examples) cloned onto your local machine
- The [NEAR CLI](https://docs.near.org/tools/near-cli#setup) tool installed
- Node and npm installed in your machine
- The [Rust and WASM](https://docs.near.org/develop/contracts/introduction#rust-and-wasm) toolchain installed

## Build smart contract

- Clone the [Calimero examples repository](https://github.com/calimero-is-near/calimero-examples) and
- Navigate to the voting directory.
- Navigate to `contracts/private`
- Compile the Rust and WASM smart contract located using:

```bash
./build.sh
```

Compiled .wasm file of the contract located in :
`target/wasm32-unknown-unknown/release/poll.wasm`

![](../../static/img/voting_wasm.png)

## Generating an auth token

Before deploying the Voting smart dApp on our private shard, we must first generate a Calimero [auth token](/docs/getting_started/generate_token.md). This token will authenticate and authorize external applications to communicate with our shard.
To create an auth token, follow these steps:

- Log in to your Calimero Network account.
- Click on the Security dropdown in the left navigation menu.
- Select Tokens.
- Click on Create new token.
- Choose a name for your auth token.
- Select a duration for the token. For this demo, we will use a Perpetual token.
- Configure the token's permissions by selecting the appropriate checkboxes. In this case, we will select **Full access**.

![](../../static/img/voting_token.png)
Make sure to store your token in a safe place, as it will be required to communicate with the private shard and cannot be obtained afterwards. For more information, see [Generate token](/docs/getting_started/generate_token.md).

## Setting up the near CLI

To deploy a contract on a Calimero shard using `near-cli`, you need to set the token value that gives permission to deploy contracts and make function calls using **near set-api-key** command. But, as of now, the "--nodeUrl" option is ignored, so you have to set the default node to <https://rpc.testnet.near.org>. To set up your near CLI run the following commands, in your terminal:

1. Set API key

```
 near set-api-key https://rpc.testnet.near.org <AUTH_TOKEN>   
```
- **<AUTH_TOKEN>**: is your copied token ID. For more information, see [Generate token](/docs/getting_started/generate_token.md).

2. Create a new keypair for the shard main account (if your shard name is 'demos-calimero-testnet', your main account is 'demos.calimero.testnet').

```
 near generate-key <MAIN_ACCOUNT_ID> --networkId <SHARD_ID>   
```

- **<MAIN_ACCOUNT_ID>**: is your account ID.  For more information, see [Access account ID](/docs/getting_started/access_account.md)
- **<SHARD_ID>**: is your shard name. For more information, see [set up your shard](/docs/getting_started/running_a_shard.md)

3. The previous command will generate a new keypair and stored it in  `~/.near-credentials/` folder. Navigate to the `~/.near-credentials/` folder to access your keypair.

```
cd ~/.near-credentials
```

Then navigate to your stored keypair file which is usually in a `.json` format.

4. Open your `.json` file and copy the Public key.
5. Open Calimero [Console](https://app.calimero.network/dashboard)
6. Click on **Security**
7. Click on **Accounts**
8. Search for your **Main Account**  in the list and click on the  `⋮` three dots menu.
9. Click on Add public key

![](../../static/img/public_key.png)

## Create sub account

 In NEAR it’s possible to add code to the accounts for that create contract. You can arbitrarily name the sub-account id. Main accounts can create sub-accounts of themselves, helping to better organize related-accounts.

 ```bash
  near create-account <SUB_ACCOUNT_ID>.<MAIN_ACCOUNT_ID> --masterAccount <MAIN_ACCOUNT_ID> --networkId <SHARD_ID> --nodeUrl https://api.calimero.network/api/v1/shards/<SHARD_ID>/neard-rpc/  
 ```

- **<SUB_ACCOUNT_ID>**: Sub account can be anything for e.g voting-app-example
- **<MAIN_ACCOUNT_ID>**: is your account ID.  For more information, see [Access account ID](/docs/getting_started/access_account.md)
- **<SHARD_ID>**: is your shard name. For more information, see [set up your shard](/docs/getting_started/running_a_shard.md)

After, you run the command you can check in the **Accounts** section in your console to view the sub account you created.-



## Need help?

Send a request to [support@calimero.network](mailto:support@calimero.network) or [https://www.calimero.network/trial](https://www.calimero.network/trial).
