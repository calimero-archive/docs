---
title: Bridge
sidebar_position: 4
---

The Calimero bridge enables users to transfer assets fungible tokens (FTs) and non-fungible tokens (NFTs) between NEAR public networks (Testnet or Mainnet) and their Private shard. It also enables users to make cross shard contract calls (smart contract calls from a public contract into the shard).

The Calimero bridge has three bridge connectors:
- FT connector
- NFT connector
- Cross shard call

## FT connector

The FT connector is a contract pair that simplifies the process of transferring a fungible token from one chain to another. It enables one to lock a token on one chain, mint a wrapped version of the token on another chain, and later burn the wrapped token to unlock the original token. To install the FT connector:

- Select **FT Connector**
- Click on **Install FT Bridge** button

![](../../static/img/ft-connectors.png)

Once you have successfully installed the FT bridge, you will have access to the FT page. On this page, you can view your FT contracts and transactions related to fungible tokens. 

![](../../static/img/ft-connector-page.png)


### Register FT token

To bridge your FT token and transfer it between different chains, you must register the token. Registering the token allows you to mint a wrapped FT token on the destination chain and burn it to unlock the original FT token on the source chain. To register FT token:

- Click on the **Register FT** button

![](../../static/img/register-ft.png)

- A popup window will appear, prompting you to enter the contract address of your FT
- Enter the contract address of your FT to initiate the bridging process for this type of asset

![](../../static/img/ft_contract_address.png)

:::info
This registration step is a one-time action required before you can bridge an FT token for the first time to the designated destination blockchain.
:::

## NFT connector

The NFT connector is a contract pair that simplifies the process of transferring a non-fungible token from one chain to another. It enables one to lock a token on one chain, mint a wrapped version of the token on another chain, and later burn the wrapped token to unlock the original token. To install the NFT connector:

- Select **NFT Connector**
- Click on **Install NFT Bridge** button

![](../../static/img/nft-connectors.png)

Once you have successfully installed the NFT bridge, you will have access to the NFT page. On this page, you can view your NFT contracts and transactions related to non-fungible tokens.

![](../../static/img/nft-bridge-overview.png)

## Cross shard call

The Cross shard connector is a contract pair used to call one chain's contract methods from another chain. Follow these steps to install the Cross shard Call connector:

- Select **Cross Shard Call**
- Click on **Install XSC** button

![](../../static/img/cross-shard.png)

Once you have successfully installed the Cross shard connector, you will have access to the XSC page. On this page, you can view your XSC contracts and transactions related to cross shard tokens.

![](../../static/img/xsc-bridge-overview.png)

:::info
For more details on Bridges and their architecture, refer to the [Bridge Architecture ](https://docs.calimero.network/bridge/architecture) documentation.
:::

## Permissions Management

To use the Calimero bridge for transferring tokens and making cross-Shard calls, you need to set up bridge permissions.  These permissions allow you to securely access and utilize the bridge's features.

![](../../static/img/permissions-management.png)

### FT and NFT connector regex rules

To enable bridging for the NFT and FT connectors, you need to click on the **Add new rule** buttona and add a regex rule that allow bridging for specific accounts matching that rule. Each connector has the **No allow** regex rule, which is a rule that restricts certain accounts from using the bridge based on your defined regex pattern. This means that any account matching the specified pattern will not be granted permission to utilize the bridge.

![](../../static/img/add-regex-rule.png)

### Verify FT and NFT connector permissions

To check whether an account has the necessary permissions to use the Connector, you need click on the **Check Permissions** button and provide the Account ID for which you want to verify the permissions. 

![](../../static/img/check-permissions.png)

### Cross shard connector regex rules

Unlike FT and NFT connectors, Cross shard connectors have the **No allow** regex rule and **No deny XSC** regex rule. The **No deny XSC** regex rule allows Cross shard transactions for all accounts except those that match a specific regular expression pattern while the **No allow** regex rule grants permission for specific accounts to perform Cross shard transactions. For example:

- You can add an allow rule for the Cross shard connector using the regex .* (allowing anyone to bridge). 

![](../../static/img/xsc-regex-allow.png)

- You can deny rule pair using the regex .*evil.* for the account ID and .* for the contract ID.

![](../../static/img/deny-rule.png)

With these rules set, any Account ID that does not contain the term "evil" can make Cross shard calls, while accounts containing "evil" cannot make any Cross shard calls.

### Verify cross shard connector permission

To verify if a specific pair of Account ID and Contract ID is eligible for making Cross shard calls, you need click on the **Check Permissions** button and provide the relevant Account ID and Contract ID that you want to check. 

![](../../static/img/deny-permisson-rule.png)

This will help determine if the provided pair has the necessary permissions for performing Cross shard Calls.

:::info
For more details on permissions, refer to the [Permissions](/docs/bridge/bridging/2_permissions.mdx) documentation.
:::
