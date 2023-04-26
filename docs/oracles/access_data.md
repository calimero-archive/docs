---
sidebar_position: 3
sidebar_label: Accesing oracle data
---

# Accessing Oracle data

After storing key-value pairs in the KV Oracle contract, you can access these values from other contracts within the same shard. To achieve this, you can utilize the `get_value` function provided by the KV Oracle contract.

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

By following these steps, you can access key-value pairs stored in the KV Oracle contract from other contracts within the same shard.