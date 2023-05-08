---
title: Calimero Bridge
sidebar_position: 1
---

The NEAR to Calimero bridge enables interoperability between the NEAR mainnet and Calimero Private Shards. Calimero offers low transaction costs and high privacy due to its validator-based infrastructure. The bridge allows for the transfer of digital assets, including fungible and non-fungible tokens, as well as cross-chain contract calls in a realistic time frame of 5-15 seconds. This performance opens up a variety of potential business use cases. 

## Features of Calimero bridge

1. **Trustless**: The NEAR to Calimero bridge achieves trustlessness through a stateless relayer that can be run by anyone. The relayer reads block headers from a source chain and sends them to the light client contract on the destination chain. The bridge is bidirectional, requiring at least one relayer from NEAR to Calimero and at least one relayer from Calimero to NEAR to be running. The bridge is trustless because anyone can send the block headers to the light client contract, but they will only be accepted if all the proof of stake rules are verified.

2. **Automated**: The Calimero bridge is automated, with events on the connectors triggering relayers to send the newest block from the source to the destination chain. Some of these events also trigger automatic proving of receipts. The NEAR protocol's fast block time and the bridge's architecture, including components such as the relayers, bridge service, events indexer, and message queue, enable quick and frequent bridging.

3. **Easy to use**: The bridge is straightforward for usage. To bridge assets, a user or a DApp only needs to send a single signed transaction. Concrete examples of how to bridge (N)FTs or make cross-chain contract calls can be found on the bridge's documentation.

4. **Fast**: The Calimero bridge with assets fully bridged in an average of 15 seconds and as low as 5 seconds in some cases. This speed is made possible by the bridge's architecture and components, as well as the fast block time of the NEAR protocol.