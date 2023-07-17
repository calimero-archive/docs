---
title: "Console"
---


This page contains some of the most common questions asked about the console.

## Authentication

### Why do I need an authentication token in Calimero?
An authentication token is required for communicating with your Calimero shard outside of the console. It enhances the security of your shard account by verifying the user's identity. These unique codes provide protection against unauthorized access. The authentication token authenticates and authorizes external applications to communicate with your shard.

### How should I handle and store my authentication token?
Once you have created your authentication token, it is crucial to store it in a secure location. The token serves as a key to communicate with your private shard. Losing or forgetting the token's value can result in the inability to access your shard. If you happen to lose the token, you will need to issue a new one. Therefore, it is recommended to store the token in a secure and easily accessible location.

### What can I do with my authentication token in Calimero?
With your authentication token in hand, you are ready to call smart contracts or deploy decentralized applications (dApps) on your Calimero Private Shard. The token enables you to authenticate and authorize external applications to interact with your shard, allowing for secure and controlled communication.

## User Management

### Can I modify user permissions after they have been added to my private shard?
Yes, you can modify user permissions even after they have been added to your private shard. If you need to adjust a user's level of access or change their permissions, follow the steps [here](https://docs.calimero.network/getting_started/adding_users).

### What permissions can I assign to users in my private shard?
In Calimero, you have control over assigning permissions to users in your private shard. The available permissions vary based on the specific requirements and functionalities of your shard. Common permissions may include read-only access, write access, contract deployment, account management, and more. You can assign these permissions based on the roles and responsibilities of each user.

### How should I manage user permissions to ensure security and control within my private shard?
Managing user permissions is crucial to maintaining security and control within your private shard. Assign permissions based on the specific tasks and responsibilities of each user, granting them only the necessary access required to fulfill their role. Regularly review and update user permissions to align with any changes in user roles or organizational requirements.


## Explorer

### What can I view in the Calimero Explorer?
The Calimero Explorer allows you to view various aspects of your private shard, including accounts, blocks, transactions, and details about fungible tokens and non-fungible tokens. It provides insights into the network's activity and asset transfers.

### What information can I find in the Blocks section of the Explorer?
In the [Blocks section of the Explorer](https://docs.calimero.network/getting_started/explorer#blocks), you can view details about the transactions that have occurred. This includes the date of the transactions, transaction authors, transaction status, block and parent hash, transaction amount, receipt of the transaction, and gas usage.

### How can I access transaction information in the Explorer?
By navigating to the [Transactions page in the Explorer](https://docs.calimero.network/getting_started/explorer#transactions), you can explore data and insights about transaction activities, including transaction hashes, statuses, creation dates, sender and recipient accounts, block height and hash, deposit value, transaction fees, and the amount of gas used.

## Event Hooks

### Can I receive notifications for multiple events with a single webhook?
Yes, Calimero allows you to define multiple webhooks, each with a unique URL. You can receive notifications for additional events by simply adding those events to an existing webhook. This eliminates the need to create a new webhook for each event.

### What happens when a defined event occurs in Event Hooks?
When a defined event occurs within your shard, you will receive the corresponding data on your configured webhook. The data will be sent to the specified URL, allowing you to process and handle the event as required.

## Marketplace

### Can I view the contracts I have installed from the Marketplace?
Yes, you can view the contracts you have installed from the Marketplace, to do so follow the steps [here](https://docs.calimero.network/getting_started/market_place#viewing--installed-applications)

### Are there any payment options available in the Marketplace?
As of now, the Marketplace does not support payments. However, please note that payments and additional features, such as EVM support, are planned and will be introduced in the future.

## Gateway

### How does the Gateway handle incoming requests?
All requests towards the private shard are routed through the Gateway. It acts as a bridge between the client and the private shard infrastructure, including the RPC and GraphQL Indexer endpoints. Requests can be sent to the RPC endpoint for transactions and data retrieval, or to the Indexer GraphQL endpoint for accessing off-chain stored data.

### How are requests authorized in the Gateway?
Requests are authorized using an authorization token. The Calimero Console uses a custom authorization header, near-cli uses the x-api-key header, and applications can use either the standard authorization header or the x-api-key header. The authorization token is issued from the Calimero Console and must be included in the request header for authentication.

### What permissions are associated with the authorization token?
Permissions are implemented as an allow list linked to the authorization token. The database stores the token along with the associated actions that are allowed, such as write access, viewing transaction status, account keys, account state, contract state, block details, and chunk details. Additionally, the database also holds the ID of the shard where these actions can be performed.

## Shard Management

### What is a custodial account in Calimero?
In Calimero, a custodial account refers to an account for which the platform stores the keys. It allows users to create a key pair, add public keys, and top up tokens. Custodial accounts are available in two types: subaccounts and top-level accounts.

### Can I add a public key to a custodial account?
Yes, you can add a public key to a subaccount in Calimero. To do so, follow these steps [here](https://docs.calimero.network/getting_started/custodial#add-public-key)

### Can I configure nodes for Developer Shards?
No, Developer Shards in Calimero are nonconfigurable. Node configuration is only available for Professional Shards.

### What can be configured for Professional Shards?
For Professional Shards, you can configure the following types of nodes: Validator nodes, RPC nodes, Archive RPC nodes, and Indexer nodes. Please note that there may be associated charges based on the number of nodes configured.

## Contract Management

### What is the difference between "Installed Contracts" and "Deployed Contracts"?
- Installed Contracts: This page displays a list of all the contracts that have been uploaded and saved in the Calimero database. Installing a contract means uploading and saving the contract files, making them available for deployment.
- Deployed Contracts: This page lists the contracts that have been deployed to the blockchain. Deploying a contract creates a new account (subaccount of the shard master account) and deploys the selected contract to that account.

### Where can I view the result and transaction details of my method call?
The result of your method call will be displayed on the Console page. You can also view the transaction details in the Explorer.


