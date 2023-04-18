---
title: Shard Accounts
sidebar_position: 4
---

There are two main types of accounts inside the Private Shards:

- Private accounts inside the Shard (generated through Console or CLI)
- Public wallets synced into the Shard (NEAR wallets used on Mainnet or Testnet)

## Public NEAR Wallets
Public wallet integrations which allows the user to sign transactions from their wallet and interact with the Shard (the public wallet account is synced into the shard providing a seamless experience to the user).

Currently we support MyNEARWallet and are working on the integration with the official NEAR wallet. This allows self-custody of the keys and enables users to interact with any Private Shard they have permissions to do so.

## Calimero Key Management Service
Calimero's Key Management Service which is a custody wallet where the sealed keys are stored inside a Vault, the users can send transactions to be signed in a secure way. This is used for all internal keys generated through the Console. Keys inside the Vault can be revoked and replaced with users non-custody keys if needed through the Console.
