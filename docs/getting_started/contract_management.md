---
title: Contract management
sidebar_position: 12
---

Contract management is a crucial feature that allows users to effectively interact with installed and deployed contracts. This feature enables users to upload their own `.wasm` and `ABI` files to the Console and deploy them to the blockchain.

When you navigate to the Contract Management Page, you will be presented with two tabs: **Installed Contracts** and **Deployed Contracts**.

![](../../static/img/contract_management.png)


## Installed Contracts

Installed Contracts page shows the list of all the installed contracts in that specific shard. Installing the contract means uploading and saving contract files to the database and making them available for deployment from the Calimero console. To install your contract:

- Click on the **Install contract** button, which will prompt you to upload your contract files
- Provide a unique contract name (the contract name will be displayed in the list of deployable contracts)
- Upload your binary file (`.wasm`)
- Upload the `.json` ABI file (you will see a block displaying the content of the file)
- Click on the **Install new contract** button

![](../../static/img/install_contract.png)

## Deployed Contracts

![](../../static/img/contract-deployed-page.png)

Deployed Contracts page shows the list of deployed contracts for your specific shard. Installed contracts can be deployed to the blockchain. To deploy your contract:

- Select the contract you want to deploy
- Add your contract ID
- Click on the **Create account and deploy contract** button

![](../../static/img/deploy-contract.png)

This action will create a new account (which will be a subaccount of shard master account) and this account will be used for smart contract deployment.

## Interacting with the contract

After a contract is deployed, it will be listed on the Deployed Contracts page. To interact with the contract:

- Select the contract you want to interact with. This will open a page displaying a drop-down selector.

![](../../static/img/interact-contract-page.png)

- Choose the desired call method from the drop-down
- Provide the method parameters/arguments
- Select your contract name (subaccount name) from the drop-down
- (Optional) Specify the Gas fee and deposit
- Click on the **Send Transaction** button

![](../../static/img/filled-contract.png)

The result of your method call will be displayed and you can see transaction details in the [Explorer](https://app.calimero.network/explorer/dashboard).

![](../../static/img/method-result-contract.png)
