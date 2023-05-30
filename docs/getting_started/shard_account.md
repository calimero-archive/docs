---
title: Shard Accounts
sidebar_position: 3
---

Within Calimero's Private Shards, there are two primary types of accounts:

- Private accounts inside the Shard (generated through Console or CLI)
- Public wallets synced into the Shard (NEAR wallets used on Mainnet or Testnet)

These account options provide users with different approaches to interact with Calimero's Private Shards, allowing for both self-custody and secure key management through the Calimero Key Management Service.

## Public NEAR Wallets
Public wallet integrations enable users to sign transactions from their own NEAR wallet and interact seamlessly with the Shard. These public wallet accounts are synced into the Shard, ensuring a convenient and user-friendly experience. Currently, we support MyNEARWallet, and we are actively working on integrating with the official NEAR wallet. With these integrations, users can maintain self-custody of their keys and securely interact with any Private Shard they have permissions to access.

## Calimero Key Management Service
Calimero offers a Key Management Service that acts as a custody wallet. In this service, sealed keys are securely stored within a Vault. Users can send transactions to be signed in a highly secure manner. This Key Management Service is primarily used for managing internal keys generated through the Calimero Console. If necessary, keys stored in the Vault can be revoked and replaced with non-custodial keys managed by users through the Console. This flexibility ensures efficient key management within the Private Shards.

