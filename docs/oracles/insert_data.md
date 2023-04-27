---
sidebar_position: 2
sidebar_label: Adding off-chain data
---

# Updating Contract Values

Once a KV Oracle is installed in the shard, you can start storing key-value pairs in the contract. To do this, you need to send a POST request to the endpoint displayed in the oracle details page.

To access this page:

1. Go to the "Oracles" section.
2. Select the desired oracle.

<img src={require('@site/static/img/oracle_detail.png').default} />

To update or create a key-value pair, send a POST request to the endpoint with the following body:

```json
{
    "key": "near_price",
    "value": "3.25",
    "shardId": "cali-calimero-testnet"
}
```

This will store or update the new key-value in the contract.