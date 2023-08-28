---
title: Shard Accounts
sidebar_position: 3
---

Within Calimero's private shards, there are two primary types of accounts:

- Private accounts inside the shard (generated through Console or CLI)
- Public wallets synced into the shard (NEAR wallets used on Mainnet or Testnet)

These account options provide users with different approaches to interact with Calimero's private shards, allowing for both self-custody and secure key management through the Calimero Key Management Service.

## Public NEAR Wallets
Public wallet integrations enable users to sign transactions from their own NEAR wallet and interact seamlessly with the shard. These public wallet accounts are synced into the shard, ensuring a convenient and user-friendly experience. Currently, we support MyNEARWallet, and we are actively working on integrating with the official NEAR wallet. With these wallet integrations, users can maintain self-custody of their keys and securely interact with any private shard they have permissions to access.

## Calimero Key Management Service
Calimero offers a [Key Management Service](https://www.calimero.network/blog/kms-private-shard) that acts as a custody wallet. This Key Management Service is primarily used for managing internal keys generated through the Calimero Console, ensuring efficient key management within the private shards. In this service, sealed keys are securely stored within a Vault and users can send transactions to be signed in a highly secure manner. 

