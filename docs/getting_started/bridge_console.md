---
title: Bridge
sidebar_position: 4
---

The Calimero bridge serves as a vital tool for users to transfer assets, including fungible tokens (FTs) and non-fungible tokens (NFTs), between the NEAR public network (Testnet or Mainnet) and their private shard. Additionally, it facilitates cross-shard contract calls, allowing users to invoke smart contracts from a public contract into the shard.

The Calimero bridge comprises three essential bridge connectors:

- FT connector
- NFT connector
- Cross-shard call connector

## FT connector

The FT connector serves as a contract pair that simplifies the transfer of fungible tokens (FTs) between different chains. It provides a straightforward process for locking an FT token on one chain, minting a wrapped version of the token on another chain, and later burning the wrapped token to unlock the original token. To install the FT connector:

- Select **FT Connector**
- Click on the **Install FT Bridge** button

![](../../static/img/ft-connectors.png)

Once the installation is successful, you will gain access to the FT page, which presents information about your FT contracts and displays transactions related to fungible tokens.

![](../../static/img/ft-connector-page.png)


### Register FT token

Before bridging an FT token and transferring it between chains, you need to register the token. The registration process enables you to mint a wrapped FT token on the destination chain and subsequently burn it to unlock the original FT token on the source chain. To register an FT token:

- On the FT Connector page, click on the **Register FT** button

![](../../static/img/register-ft.png)

- A popup window will appear, requesting the contract address of your FT token
- EEnter the contract address of your FT token in the provided field to initiate the bridging process for this specific asset type

![](../../static/img/ft_contract_address.png)

:::info
The registration step is a one-time action required before bridging an FT token for the first time to the designated destination blockchain.
:::

## NFT connector

The NFT connector serves as a contract pair that facilitates the transfer of non-fungible tokens (NFTs) between different chains. It simplifies the process of locking an NFT on one chain, minting a wrapped version of the token on another chain, and subsequently burning the wrapped token to unlock the original NFT. To install the NFT connector:

- Select **NFT Connector**
- Click on the **Install NFT Bridge** button

![](../../static/img/nft-connectors.png)

Once the installation is successful, you will gain access to the NFT page, which presents information about your NFT contracts and displays transactions related to non-fungible tokens.

![](../../static/img/nft-bridge-overview.png)

## Cross-shard call

The cross-shard connector is a contract pair used to call one chain's contract methods from another chain. Follow these steps to install the cross-shard call connector:

- Select **Cross Shard Call**
- Click on the **Install XSC** button

![](../../static/img/cross-shard.png)

Once you have successfully installed the cross-shard connector, you will have access to the XSC page. On this page, you can view your XSC contracts and transactions related to cross-shard tokens.

![](../../static/img/xsc-bridge-overview.png)

:::info
For more details on Bridges and their architecture, refer to the [Bridge Architecture ](https://docs.calimero.network/bridge/architecture) documentation.
:::

## Permissions Management

To utilize the Calimero bridge for token transfers and cross-shard calls, it is essential to set up bridge permissions. These permissions ensure secure access and usage of the bridge's features.

![](../../static/img/permissions-management.png)

## FT and NFT connector regex rules

Both the FT and NFT connectors have the **No allow** regex rule, which allows you to restrict certain accounts from using the bridge based on a defined regex pattern. Any account matching the specified pattern will be denied permission to utilize the bridge. To enable bridging for the FT and NFT connectors:

- Click on the **Add new rule** button

![](../../static/img/add-regex-ft-nft.png)

- Add a regex rule that allows bridging for specific accounts matching that rule

![](../../static/img/add-regex-rule.png)

### Verify FT and NFT connector permissions

To verify whether an account has the necessary permissions to use the FT or NFT connector:

- Click on the **Check Permissions** button 

![](../../static/img/check-permissions-nft-ft.png)

- Provide the Account ID for which you want to verify the permissions

![](../../static/img/check-permissions.png)

## Cross-shard connector regex rules

Cross-shard connectors have two important regex rules: the **No allow** rule and the **No deny XSC** rule. These rules control the permissions for cross-shard transactions on the connector.

![](../../static/img/no-allow-xsc.png)

### No Allow Regex Rule

The **No allow** regex rule grants permission for specific accounts to perform cross-shard transactions. By adding this rule, you can specify which accounts are allowed to initiate cross-shard calls.

To add the **No allow** regex rule:

- Click on the **Add new rule** button for the desired side (either source or destination)
- Configure the rule by specifying the regular expression pattern that matches the desired account IDs

![](../../static/img/xsc-regex-allow.png)

For example, using the regex pattern .* will allow any account to bridge and perform cross-shard calls.

### No Deny XSC Regex Rule

The **No deny XSC** regex rule allows cross-shard transactions for all accounts except those that match a specific regular expression pattern. This rule helps to block specific accounts from making cross-shard calls.

To add the **No deny XSC** regex rule:

- Click on the **Add new rule** button for the desired side (either source or destination)
- Configure the rule by specifying the regular expression pattern that matches the undesired account IDs

![](../../static/img/deny-rule.png)

For example, using the regex pattern .*evil.* for the Account ID and .* for the Contract ID will block any accounts containing the term "evil" from making cross-shard calls.

### Verify cross-shard connector permission

To verify if a specific pair of Account ID and Contract ID is eligible for making cross-shard calls:

- Click on the **Check Permissions** button
- A prompt will appear, requesting you to provide the relevant Account ID and Contract ID that you want to check for permissions
- Enter the Account ID and Contract ID in the provided fields within the prompt.

![](../../static/img/deny-permisson-rule.png)

This process will determine if the specified pair has the necessary permissions to perform cross-shard calls.

:::info
For more detailed information regarding permissions, refer to the [Permissions](/docs/bridge/bridging/2_permissions.mdx) documentation.
:::
