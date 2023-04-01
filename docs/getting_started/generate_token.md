---
title: Generate Auth Token
sidebar_position: 3
---

 Authentication token is needed for custom dapps and for CLI usage. Authentication tokens strengthen account security by verifying users identity. These unique codes offer protection from unauthorized access. This token will authenticate and authorize external applications to communicate with your shard. Calimero is a permissioned chain and it allows for granular control over the token's time to live and associated permissions.

To create an auth token, follow these steps:

1. Navigate to the Calimero [Console](https://app.calimero.network/dashboard).
2. Click on the Security dropdown in the left navigation menu.
3. Select **Tokens**.

![](../../static/img/security.png)

4. Click on **Create new token**.

![](../../static/img/add_token.png)

5. Choose a name and select a duration for your auth token.

![](../../static/img/token_name.png)

6. Configure the token's permissions by selecting the appropriate access. You can choose either **Granular** or full access

![](../../static/img/token_permissions.png)

Granular access have the following checkboxes represent different types of permissions, such as:

- **Write**: Create blockchain transactions
- **View accounts**: View account states
- **View contract code**: View the deployed wasm binary
- **View keys**: View account public keys
- **View contract state**: View state of the deployed contract
- **View transactions**: View transaction status
- **View blocks**: View block details
- **View chunks**: View chunk details

7. Click on **Generate Token**.
![](../../static/img/generate_token_button.png)

8. Once the token is issued, you can copy it to your clipboard or request to be sent to you via email.

:::tip
Once you have created your auth token, be sure to store it in a secure location, as it will be required to communicate with your private shard. The token cannot be obtained afterwards, which means you’ll have to issue a new token if you forget its value.
:::

With your auth token in hand, you are ready to call smart contracts or deploy dapps on Calimero Private Shard!

## Setting up the NEAR CLI to access the Shard via CLI

To interact with a Calimero shard using `near-cli`, you need to set the token value using **near set-api-key** command. At the time of writing, the "--nodeUrl" option is ignored, so you have to set the value to <https://rpc.testnet.near.org>. To set up your near CLI run the following commands, in your terminal:

1. Set API key

```
 near set-api-key https://rpc.testnet.near.org <AUTH_TOKEN>   
```
- Replace **<AUTH_TOKEN>** with your token value 

2. Create a new keypair for the shard main account (if your shard name is 'demos-calimero-testnet', main shard account is 'demos.calimero.testnet').

```
 near generate-key <MAIN_ACCOUNT_ID> --networkId <SHARD_ID>   
```

- Replace **<MAIN_ACCOUNT_ID>** with your main shard account ID.
- Replace **<SHARD_ID>** with your shard name + the suffix **calimero-testnet** (`SHARD_NAME-calimero-testnet`)

3. The keypair is created and stored it in `~/.near-credentials/` directory. Navigate to the `~/.near-credentials/` directory to access your keypair.

```
cd ~/.near-credentials/SHARD_ID
```

4. Then navigate to your stored keypair file which is usually in a `.json` format. The JSON file is located inside a network directory,

```
cd ~/.near-credentials/network-id/account-id.json
```

4. Copy the _Public key_ from your JSON file.
5. Open Calimero [Console](https://app.calimero.network/dashboard)
6. Click on **Security**
7. Click on **Custodian**
8. Search for your master shard account in the list and click on the  `⋮` three dots menu.
9. Click on Add public key
10. Paste the public key, wait for the operation to finish and that's it! The key has been added to the master shard account.

![](../../static/img/public_key.png)


## Need help?

Send a request to [support@calimero.network](mailto:support@calimero.network) or [https://www.calimero.network/trial](https://www.calimero.network/trial).
