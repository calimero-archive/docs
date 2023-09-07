---
title: Generate Auth Token
sidebar_position: 5
---

Authentication token is needed for communicating with the shard outside of the console. Authentication tokens strengthen your shard account security by verifying users identity. These unique codes offer protection from unauthorized access. This token will authenticate and authorize external applications to communicate with your shard. Calimero is a permissioned chain and it allows for granular control over the token's time to live and associated permissions.

To create an auth token, follow these steps:

1. Navigate to [https://app.calimero.network/security/tokens](https://app.calimero.network/security/tokens).

:::info
You can also access this from the console dashboard by clicking on **Security** > **Tokens** in the left navigation menu.
:::

2. Click on **Create new token**.

![](../../static/img/add_token.png)

3. Choose a name and select a duration for your auth token.

![](../../static/img/token_name.png)

4. Configure the token's permissions by selecting the appropriate access. You can choose either **Granular** or full access

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

5. Click on **Generate Token**.
![](../../static/img/generate_token_button.png)

6. Once the token is issued, you can copy it to your clipboard or request to be sent to you via email.

:::tip
Once you have created your auth token, be sure to store it in a secure location, as it will be required to communicate with your private shard. The token cannot be obtained afterwards, which means you’ll have to issue a new token if you forget its value.
:::

With your auth token in hand, you are ready to call smart contracts or deploy dapps on Calimero Private Shard!

For more information on how to use the token, see [Using the NEAR CLI](https://docs.calimero.network/interact/cli)
