---
title: Generate Auth Token
sidebar_position: 3
---

Before running any contract or deploying any application on your private shard, you must first generate a Calimero auth token. This token will authenticate and authorize external applications to communicate with your shard. Calimero is a permissioned chain and it allows for granular control over the token's time to live and associated permissions.

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

- **Write**: Create blockchain
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

Once you have created your auth token, be sure to store it in a secure location, as it will be required to communicate with your private shard. The token cannot be obtained afterwards, which means you’ll have to issue a new token if you forget its value.

With your auth token in hand, you are ready to call smart contracts or deploy dapps on Calimero Private Shard!

## Need help?

Send a request to [support@calimero.network](mailto:support@calimero.network) or [https://www.calimero.network/trial](https://www.calimero.network/trial).