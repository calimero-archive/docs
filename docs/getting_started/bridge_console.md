---
title: Bridge
sidebar_position: 4
---

The Calimero bridge enables users to transfer assets fungible tokens (FTs) and non-fungible tokens (NFTs) between NEAR public networks (Testnet or Mainnet) and their Private shard. It also enables users to make cross shard contract calls (smart contract calls from a public contract into the shard). The Calimero bridge has three bridge connectors:
- FT connector
- NFT connector
- Cross shard call

## FT connector

The FT connector is a contract pair that simplifies the process of transferring a fungible token from one chain to another. It enables one to lock a token on one chain, mint a wrapped version of the token on another chain, and later burn the wrapped token to unlock the original token. To install the FT connector:

- Select **FT Connector**
- Click on **Install FT bridge** button

![](../../static/img/ft-connectors.png)

### Register FT token

Once you have successfully installed your FT connector, you can proceed to register your fungible token (FT). During the registration process the FT connector contract executes a call to the `storage_deposit` function on the specified FT contract. To register FT token:

- Click on the **Register FT** button.

![](../../static/img/register-ft.png)

- A popup window will appear, prompting you to enter the contract address of your FT.

- Enter the contract address of your FT to initiate the bridging process for this type of asset.

![](../../static/img/ft_contract_address.png)

:::info
This registration step is a one-time action required before you can bridge an FT token for the first time to the designated destination blockchain.
:::

## NFT connector

The NFT connector is a contract pair that simplifies the process of transferring a non-fungible token from one chain to another. It enables one to lock a token on one chain, mint a wrapped version of the token on another chain, and later burn the wrapped token to unlock the original token. To install the NFT connector:

- Select **NFT Connector**
- Click on **Install NFT bridge** button

![](../../static/img/nft-connectors.png)

## Cross shard call

The Cross shard connector is a contract pair used to call one chain's contract methods from another chain. Follow these steps to install the Cross-Shard Call connector:

- Select **Cross Shard Call**
- Click on **Install XSC** button

![](../../static/img/cross-shard.png)

:::info
For more details on Bridges and their architecture, refer to the [Bridge Architecture ](https://docs.calimero.network/bridge/architecture) documentation.
:::

## Permissions Management

In order to use the Calimero bridge to transfer FTs, NFTs, or make cross-Shard calls, you'll need to set up bridge permissions.
![](../../static/img/permissions.png)

Connectors have a "deny all" default setting, and permissions must be explicitly granted for accounts. Permissions are managed on a connector basis for both NEAR (bridging from NEAR to Calimero) and Calimero (bridging from Calimero to NEAR).

### Regex rules

To allow bridging, you need to add a regex rule. When adding an allow rule for a connector, keep in mind that any Account ID that matches at least one allow rule can bridge assets. Here's an example of setting up rules:

- Add an allow rule for the XSC connector using the regex .* (allowing anyone to bridge).
- Add a deny rule pair using the regex .*evil.* for the account and .* for the contract ID.

With these rules set, any Account ID that does not contain the term "evil" can make cross-shard calls, while accounts containing "evil" cannot make any cross-shard calls.

![](../../static/img/regex-rules.png)

:::info
For more details on permissions, refer to the [Permissions](/docs/bridge/bridging/2_permissions.mdx) documentation.
:::
