---
title: Gateway
sidebar_position: 9
---

The gateway is a reverse proxy service that is used to route incoming requests from clients to the intended server. It acts as an intermediary layer between the client and the private shard infrastructure including the RPC and GraphQL Indexer endpoints. It provides security, privacy, and scalability. It also monitors the traffic that comes into and out of the computer, and blocking any malicious or unauthorized activity.

There are two endpoints for clients to connect:

- The **RPC endpoint** for sending transactions and fetching data directly from the Shard
- The **Indexer GraphQL endpoint** for fetching Indexer Private Shard off-chain stored inside data inside a Postgres database with a GraphQL reverse proxy in front

![](../../static/img/endpoint.png)

With these endpoints clients are able to generate a variety of API keys with different policies on how the users can interact with the RPC and the Indexer endpoints. This includes anything from allowing all public users with a wallet to send transactions or fetch data to fine-grained permissions or fully disallowing any access.
