---
title: Contract management
sidebar_position: 12
---

Contract management is a key feature that enables users to interact with contracts installed and deployed. This allows users to upload their own `.wasm` and `ABI` files to the Console and deploy them to the blockchain.

![](../../static/img/contract_management.png)

Navigating to Contract Management Page displays Homepage which has table with 2 tabs **Installed Contracts** and **Deployed Contracts** tabs and Install new Contract button that will navigate to Install Page.

## Installed Contract

Installed contract page shows the list of installed contracts for your specific shard. Installing the contract means putting the contract in the Installed state, meaning uploading the contract files to GCS and making the contract available for deployment from the Calimero Console. To install your contract:

- Clicking on the **Install contract** button you'll be prompted to upload your contract files.
- You'll need to add your unique contract name which will be displayed from the list of deployable contracts and which is used for storage
- Upload binary file (.wasm)
- (optional, but recommended) Upload ABI file . When you upload an ABI file, there will be a preview block displaying the contents of the ABI file
- Click on the **Install new contract**

![](../../static/img/install_contract.png)

## Deployed Contract

Deployed contract page shows the list of deployed contracts for your specific shard. Once the contract is installed, it can be deployed from the **Deploy page**. To deploy your contract on the blockchain:

![](../../static/img/deployed_contract-page.png)


- Select the installed contract you want to deploy
- Add your contract ID.
- Click on **Create account and deploy contract** button

 This also creates a subaccount which can be viewed on [custodial accounts](/docs/getting_started/custodial.md), and the binary file is added to the subaccount.

![](../../static/img/deployed-contract.png)


## Interacting with the contract

After the contract is deployed, it is listed in the Deploy Contracts page. To interact with the contract:
- Select the contract to be interacted with, this opens a page displaying a drop down selector

![](../../static/img/interact-contract.png)

- Select the call method you want prompting  
- Input method parameters/arguments
- Select the contract name (subaccount name)
- (optional) Input the Gas fee and the deposit which is the funding the contract which will have default and minimum value of 1 Ⓣ token.
- Click on **Send transaction**

Your method call result will be displayed on the right hand side. You can also view the details of your transaction in the [Explorer](https://app.calimero.network/explorer/dashboard)

![](../../static/img/dropdown.png)
