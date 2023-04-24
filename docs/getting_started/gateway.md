---
title: Gateway
sidebar_position: 9
---

All requests towards the private shard are routed through the gateway. The
Calimero gateway is responsible for allowing or rejecting requests towards private shard components. It allows authorized users and applications to interact with the private shard. 

## Incoming requests
The gateway also acts as an intermediary layer between the client and the private shard infrastructure including the RPC and GraphQL Indexer endpoints.


Accessing the blockchain means sending requests to the RPC nodes or querying the indexer nodes.

- The **RPC endpoint** for sending transactions and fetching data directly from the Shard
- The **Indexer GraphQL endpoint** for fetching Indexer Private Shard off-chain stored data inside a Postgres database with a GraphQL reverse proxy in front

![](../../static/img/endpoint.png)

