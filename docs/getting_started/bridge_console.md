---
title: Bridge
sidebar_position: 4
---

The NEAR to Calimero bridge enables users move assets between NEAR public networks (testnet or mainnet) and your Private Shard. Additionally, you can execute cross shard contract calls which includes private smart contracts calls inside the Shard from a public contract or public smart contract calls from a contract inside the Private Shard.

## Install the bridge

To be able to brige tokens, you'll need to install **Connectors**. Calimero supports transfering fungible tokens(FTs) and non-fungible tokens(NFTs) from one chain to another. Also, through the Calimero bridge cross shard calls can be executed.

From your [Console](https://app.calimero.network/dashboard), select **Bridge** on the left navigation bar.

### FT connector

FT Connector is a contract pair used to lock a fungible token on one chain, mint a wrapped fungible token on the other, as well as to burn the wrapped fungible token and unlock it on the original chain. Follow these steps to install the FT connector:

- Select **FT Connector**
- Click on **Install FT bridge**

![](../../static/img/ft-connectors.png)

### NFT connector

NFT connector is a contract pair used to lock a non-fungible token on one chain and mint a wrapped non-fungible token on the other, as well as burning the wrapped non-fungible token and unlocking it on the original chain. Follow these steps to install the NFT connector:

- Select **NFT Connector**
- Click on **Install NFT bridge**

![](../../static/img/nft-connectors.png)

### Cross shard call

Cross shard connector is a contract pair used to call one chain's contract methods from another chain. Follow these steps to install the Cross Shard call:

- Select **Cross Shard Call**
- Click on **Install XSC**

![](../../static/img/cross-shard.png)

:::info
More details on Bridges and how it works can be found [here](https://docs.calimero.network/bridge/architecture).
:::

## Permissions Management

In order to use the Calimero bridge to transfer FTs, NFTs, or make cross-Shard calls, you'll need to set up bridge permissions. 

![](../../static/img/permissions.png)

Bridge Permissions are managed on a connector basis and at the beginning, all connectors are denied for all accounts. For each connector permissions are managed on both sides, on NEAR (for bridging from NEAR to Calimero) and on Calimero (for bridging from Calimero to NEAR). 

### Regex rules

To allow bridging, you'll need to add a regex rule. When adding allow rule for the connector you need to keep in mind that every Account ID that matches at least one allow rule can bridge assets.

![](../../static/img/regex-rules.png)

:::info
More details on permissions can be found [here](/docs/bridge/bridging/2_permissions.mdx).
:::