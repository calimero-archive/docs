---
title: Shard Architecture
sidebar_position: 3
---

Shard Architecture refers to a system where a larger blockchain network is divided into smaller, isolated subsets called private shards. These private shards are only accessible to authorized participants who have been granted permission to join. The architecture of a private shard typically includes several components:

## Shard Token

The private shard token serves one main purpose: achieving consensus within the shard. It allows validators with a stake in the network to verify and propose blocks. The token is primarily used for consensus, creating accounts, and attaching gas fees. Although it can be customized to act as a Central Bank Digital Currency (CBDC), its default usage is limited to these specific functions

## Gas Fees

Since the network's token does not possess any monetary value by default, no gas fees are paid within the network. However, there are still limitations on execution per contract call, currently set at 300 TGas. Any gas attached to transactions will be refunded.

## Validators

Private shard validators hold a portion of the tokens allocated at the beginning of the shard. These tokens are solely used for achieving consensus and do not possess any real monetary value. By default, they are designed for networks without actual monetary transactions. However, it is possible to create networks with monetary value, such as in the case of a Central Bank Digital Currency (CBDC).

Running a minimal private shard requires at least one controlling node, but it is recommended to have at least four validators for redundancy. If more than one-third of the nodes go down, the network will come to a halt. Therefore, running as many validators as possible is recommended.

### NFT Validators (Planned Future Mechanism)
In the future, there are plans to introduce different validator staking mechanisms. One such mechanism involves using ownership of a non-fungible token (NFT) as an entry ticket to become a validator in the shard. This NFT could represent ownership of a game or completion of a Know Your Customer (KYC) process. This approach aims to enhance validator diversity and provide additional security measures for private shards.

## Consensus

Calimero utilizes the Nightshade consensus algorithm, which is based on the NEAR consensus algorithm. Nightshade models the blockchain as a single entity where each block logically contains all transactions for all the shards, thus changing the state of all the shards. However, participants in the network do not download the full state or logical block physically. Instead, each participant maintains only the state corresponding to the shards they validate transactions for. The list of transactions in a block is divided into physical chunks, with one chunk per shard. For more detailed information on how it works, refer to the [NEAR paper](https://near.org/papers/nightshade/#nightshade).

## Proof of Authority Shard

In a proof of authority (PoA) shard, all validators have equal voting power and an equal number of blocks. PoA shards are commonly used in private or permissioned blockchain networks where validators are known and trusted entities, such as consortium members or enterprise partners. PoA shards offer faster transaction speeds and lower energy consumption compared to proof of work (PoW) or proof of stake (PoS) consensus mechanisms.

## Proof of Stake Shard

The proof of stake (PoS) shard, provides users the ability to have different amount of voting power/blocks produced in the network. PoS Network this can be customised based on the preferences of the network owners.Validators are required to lock up a certain amount of cryptocurrency or token as collateral, which incentivizes them to act honestly and secure the network. PoS shards are designed to be more energy-efficient, secure, and decentralized than PoW shards, as they do not require large amounts of computational power and electricity to perform the validation process. 

## Migration from the shard from Proof of Authority (PoA) to Proof of Stake (PoS)

Migrating a shard from Proof of Authority (PoA) to Proof of Stake (PoS) involves the owners of the network agreeing to allocate the stake differently within the network. Unlike in the PoA network, the stake in a PoS network is not uniformly distributed. The migration process requires coordination with existing validators and stakeholders to establish new rules and incentives for PoS validation. It may also involve developing and deploying new smart contracts, protocols, and tools to support the PoS consensus mechanism.

## State and Execution

Private execution and state are accessible only to the nodes within the private shard. The only publicly announced information includes the light client proof for private shard blocks, which is used by the light client, prover, and connector contracts. Additionally, some contract states may be accessible from a public chain if the developer allows such access in the contract through the bridge with cross-shard contract calls, which is one of the main features of Calimero shards.

## Treasury Account

In the genesis of the network, a treasury account is specified to hold all the tokens remaining after the distribution of tokens to the validators specified during creation. The ownership of these tokens can be assigned to a multisig account involving multiple parties or a single entity, depending on the network's use case. The treasury account enables the creation of new accounts, contract deployment, and onboarding of new validators. A private shard can be initiated by a single entity, and this approach allows for the future onboarding of new validators into the network.

## Account model

Calimero Shard is integrated with the NEAR wallet, which means that users authenticate using their NEAR Mainnet or Testnet FullAccess Key. Users sign an authorization message with the FullAccess Key to request permission from the Authorization Service for a specific shard. If they are granted permission, they receive a JWT token for communicating with the Private Shard. This authentication process ensures that only users with the corresponding key can issue transactions on the shard. Additionally, Private shards employ the NEAR account model within the shard and generate [FunctionCall keys](https://docs.near.org/concepts/basics/accounts/access-keys#function-call-keys) for specific contract interactions, enhancing security for users and the network.

Overall, the architecture of a private shard aims to provide a secure, scalable, and efficient way for authorized participants to collaborate and share data and transactions within a trusted environment. Understanding the architecture and mechanics of private shards is crucial for developers and users who wish to utilize Calimero private shards to build private blockchain applications more effectively and securely.
