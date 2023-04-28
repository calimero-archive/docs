---
title: Oracle
sidebar_position: 10
---

The KV (key-value) pair oracle is a Calimero application that allows you to set key-value pairs by sending a POST request to an endpoint. These values are stored in a smart contract and are accessible within the shards.

## Installation

To install the oracle:

1. Go to the [Console](https://app.calimero.network/dashboard).
2. Click on **Marketplace**.

<img src={require('@site/static/img/marketplace_oracle.png').default} />

3. Select **Key Value Oracle** from the list.
4. Enter the name of the contract and click **Install**.
5. Wait for the installation to complete.

The contract will be deployed and initialized at the chosen address. The KV Oracle will be listed in the **Oracles** section of the console.

<img src={require('@site/static/img/oracle_list.png').default} />


## Updating Contract Values

Once a KV Oracle is installed in the shard, you can start storing key-value pairs in the contract. To do this, you need to send a POST request to the endpoint displayed in the oracle details page.

To access this page:

1. Go to the **Oracles** section.
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

## Accessing Oracle data

After storing key-value pairs in a KV Oracle contract, you can access these values from other contracts within the same shard. To achieve this, you can utilize the `get_value` function provided by the KV Oracle contract.

Here's a step-by-step guide on how to access key-value pairs within the shard from other contracts:

1. In your contract code, import the necessary dependencies for interacting with the KV Oracle contract:

   ```rust
   use near_sdk::AccountId;
   use near_sdk::ContractPromise;
   ```

2. Define a method in your contract for retrieving a value from the KV Oracle contract by providing the key:

   ```rust
   pub fn get_value_from_kv_oracle(&self, kv_oracle_account_id: AccountId, key: String) -> Promise {
       let args = json!({ "key": key }).to_string().into_bytes();
       ContractPromise::new(kv_oracle_account_id)
           .function_call(
               "get_value".to_string(),
               args,
               0, // attached_deposit
               100_000_000_000_000, // gas
           )
   }
   ```

   This method takes the `AccountId` of the deployed KV Oracle contract and the key you want to retrieve.

3. In your contract, call the `get_value_from_kv_oracle` method, providing the KV Oracle contract's `AccountId` and the key of the value you want to access:

   ```rust
   let kv_oracle_account_id = "kv_oracle_contract.testnet".to_string();
   let key = "near_price".to_string();
   let value_promise = self.get_value_from_kv_oracle(kv_oracle_account_id, key);
   ```

   The method returns a `Promise` that, when resolved, contains the requested value.

4. Handle the returned `Promise` according to your contract's needs. You can either wait for the promise to be resolved or return the promise to the caller, depending on your use case.

By following these steps, you can access key-value pairs stored in a KV Oracle contract from other contracts within the same shard.
