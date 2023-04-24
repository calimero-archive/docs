---
title: Explorer
sidebar_position: 6
---

From your  Calimero [Console](https://app.calimero.network/explorer/dashboard) you can access the explorer which provides you with the ability to view all crypto transactions and information including: accounts, blocks, transactions and receipts, Fungible Tokens and Non-Fungible Tokens in details. 

![](../../static/img/explorer.png)

## Account

[NEAR Accounts](https://docs.near.org/concepts/basics/accounts/model) store digital assets, maintain balances, and track transactions.

![](../../static/img/demo_account.png)

By clicking on any of the account ID, you'll be able to have an overview of:

- The number of transactions occured on that account
- The amount of storage used
- The native account balance currently on the account
- The amount of validator stake used. This NEAR is actively being used to back a validator and secure the network. When you decide to unstake this NEAR, it will take some time to be shown in your Available Balance, as NEAR takes 3 epochs (~36 hours) to unstake.
- The transaction hash details
- The total amount of fungible tokens the account has
-  The total amount of non fungible tokens the account has

![](../../static/img/account_details.png)

## Blocks

Blocks serve as a record of transactions. Each block in the private shard contains a unique cryptographic hash of the previous block in the chain, which creates a secure and tamper-proof record of all network activity. As new transactions are submitted to the network, they are validated by the network's validators and added to a new block in the chain. Once the block is validated, it is added to the private shard and becomes part of the network's transaction history.

![](../../static/img/blocks.png)

By clicking on any of the blocks, you'll be able to have an overview of:

- date the transactions occured
- author of transaction
- status of the transaction
- block and parent hash
- transaction amount
- receipt of the transaction
- gas used for the transaction

![](../../static/img/blocks_overview.png)

## Transactions

Transactions page provides data and insights into transaction activities, your method call from one account to the other, transaction hash, transaction status, related to network activity.

![](../../static/img/transaction.png)

By clicking on any of the transactions, you'll have an overview of:

- transaction hash
- The status of the transaction
- The date the transaction was created
- The account it was sent from
- The account that received the transaction
- The block height
- The block hash
- The deposit value
- The transaction fee
- The amount of the attached gas used

![](../../static/img/transaction_overview.png)


## Fungible tokens

FT tokens are digital assets that can be transferred between accounts on the network and can be used as a form of currency or to represent other digital or physical assets. The fungible token shows data on the total fungible token transfers in your shard. 


![](../../static/img/ft_token.png)

By clicking on any of the fungible tokens, you'll have both an overview of the transaction and contract information.

- number of transactions occured on that account
- amount of storage used
- native account balance currently on the account
- amount of validator stake used
- transactio hash details
- total amount of fungible tokens the account has
- total amount of non fungible tokens the account has

For the contract information: 
- Created At
- Locked
- Last Update
- Transaction Hash
- Code Hash
- Holders
- Volume
- All Transfers

![](../../static/img/ft_overview.png)

## Non-Fungible tokens

NFT tokens are digital assets are unique digital assets that are not interchangeable and represent ownership or proof of authenticity of a specific asset. The non-fungible token page shows data on the total non-fungible transfers in your shard. 


![](../../static/img/nft.png)

By clicking on any of the blocks, you'll have both an overview of the transaction and contract information.

- number of transactions occured on that account
- amount of storage used
- native account balance currently on the account
- amount of validator stake used
- transactio hash details
- total amount of fungible tokens the account has
- total amount of non fungible tokens the account has

![](../../static/img/nft_overview.png)
