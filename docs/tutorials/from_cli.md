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

## Clone Example Repo
- Clone the example repo and
- Navigate to the voting directory.
- Navigate to `contracts/private`
- Compile the Rust and wasm smart contract located using:

```bash
./build.sh`
```

Compiled .wasm file of the contract located in :
`target/wasm32-unknown-unknown/release/poll.wasm`

![](../../static/img/voting_wasm.png)

## Generating an auth token
Before deploying the Voting smart dApp on our private shard, we must first issue a Calimero [auth token](/docs/getting_started/generate_token.md). This token will authenticate and authorize external applications to communicate with our shard.
To create an auth token, follow these steps:

- Log in to your Calimero Network account.
- Click on the Security dropdown in the left navigation menu.
- Select Tokens.
- Click on Create new token.
- Choose a name for your auth token.
- Select a duration for the token. For this demo, we will use a Perpetual token.
- Configure the token's permissions by selecting the appropriate checkboxes. In this case, we will select **Full access**. 

![](../../static/img/voting_token.png)
Make sure to store your token in a safe place, as it will be required to communicate with the private shard and cannot be obtained afterwards.

## Setting up the near CLI
To deploy a contract on a Calimero shard using `near-cli`, you need to set the token value that gives permission to deploy contracts and make function calls using **near set-api-key** command. But, as of now, the "--nodeUrl" option is ignored, so you have to set the default node to https://rpc.testnet.near.org. To set up your near CLI run the following commands, in your terminal:

- Set API key

```
 near set-api-key https://rpc.testnet.near.org <AUTH_TOKEN>
    
```

**<AUTH_TOKEN>**: is your copied token ID. For more information, see [Generate token](/docs/getting_started/generate_token.md).

- Create a new keypair for the shard main account (if your shard name is 'demos-calimero-testnet', your main account is 'demos.calimero.testnet').

```
 near generate-key <MAIN_ACCOUNT_ID> --networkId <SHARD_ID>
    
```
**<MAIN_ACCOUNT_ID>**: is your account ID.  For more information, see [Access account ID](/docs/getting_started/access_account.md)
**<SHARD_ID>**: is your shard name. For more information, see [set up your shard](/docs/getting_started/running_a_shard.md)

- The previous command will generate a new keypair and stored it in  `~/.near-credentials/` folder. Navigate to the `~/.near-credentials/` folder to access your keypair. 

```
cd ~/.near-credentials
```

After successfully running this command a public key it’s prompted in the terminal (ed25519:PUBLICKEY). Copy it and move to the final step.

- Open Calimero console
- Click on security
- Click on accounts
- Search the main account in the list and click on the three dots menu.
- Click on Add public key

## Need help?
Send a request to [support@calimero.network](mailto:support@calimero.network) or [https://www.calimero.network/trial](https://www.calimero.network/trial).
