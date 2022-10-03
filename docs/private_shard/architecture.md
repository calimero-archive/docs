---
title: Overview
sidebar_position: 1
---
# Overview 

# Shard Token
The private shard token is only used for consensus, to ensure that validators with a certain stake get the ability to verify and propose blocks. The token can be customized to be a CBDC, but by default it will be just used for consensus, to create accounts and to be attached for gas fees.
  
# Gas Fees 
Due to the fact that by default the network’s token doesn’t have any monetary value, no gas fees will be paid on the network. The current design still has limitations on execution per contract call of 300 TGas, but all gas attached will be refunded. 

# Validators
Private shard validators will own some percentage of the stake (tokens) in the shard defined in the genesis of the network. The tokens are used for consensus only, and do not have any real monetary value. This is the default behavior and it is possible to create networks with actual monetary value if needed in cases of CBDC and similar. To run a minimal private shard you could run only one node controlling the network, but we recommend to run a minimum of four validators, as the network will halt if ⅔ of the nodes go down. This gives minimal redundancy and we recommend running as more validators as possible.

For example, if a private shard is run by 100 validators owned by 100 different companies, it can be configured so that every single one of them has 1 percent of the total stake distributed. In this case every company will produce 1% of the blocks and more than 66% of the companies will need to behave maliciously and collude to corrupt the shard and 33% + 1 to stale the network.

In the future we plan to implement different validator staking mechanisms. Being an owner of an NFT could be an entry ticket to become an validator in the shard. The NFT can represent anything from ownership of a game to having gone through KYC.

# Consensus
Calimero is using the NEAR consensus algorithm called Nightshade. It is modeled as a single blockchain, in which each block logically contains all the transactions for all the shards, and changes the whole state of all the shards. Physically, however, no participant downloads the full state or the full logical block. Instead, each participant of the network only maintains the state that corresponds to the shards that they validate transactions for, and the list of all the transactions in the block is split into physical chunks, one chunk per shard. You can find more information about how it works on: https://near.org/papers/nightshade/#nightshade.

# Proof of Authority Shard

# Proof of Stake Shard

# Migration from the shard from PoA to PoS

# State and Execution
The private execution and state is accessible only by the nodes inside the private shard. Only information which is publicly announced are the light client proof for private shard blocks, used by the light client, prover and connector contracts.

Additionally, some contract state may be accessible from a public chain if the developer allowed such access in the contract, through the bridge with cross shard contract calls which is one of main features of Calimero shards.

# Treasury Account
In the genesis of the network we also specify a treasury account, which holds all the tokens left after the distribution of tokens to validators specified at creation. These tokens can be owned by a multisig of multiple parties or by one, depending on the network use case. This gives us the ability to create new accounts using the treasury account, deploy contracts, but also onboard new validators if needed. The private shard can be started by a single entity and using this approach onboard new validators into the network eventually.

# Account model
We are integrated with the NEAR wallet, which means that users are using their NEAR Mainnet or Testnet FullAccess Key to authenticate with the Calimero Shard. Users sign an authorization message with the FullAccess Key asking for permission to the Authorization Service for a specific shard and if they are able to interact they will receive a JWT token for communicating with the Private Shard. This ensures that only the user with the corresponding key is actually issuing transactions on the shard.

On top of that, Private shards use the NEAR account model inside the shard and will generate FunctionCall keys for specific contract interaction improving on security for the users and network.

# Registry Contract
