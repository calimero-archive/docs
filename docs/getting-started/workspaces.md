---
title: Create Workspace
sidebar_position: 4
---

:::info
This guide will work you through the process of creating workspaces within your organization which is essential for managing different aspects of your projects.
:::

## Understanding Workspaces

In the Calimero console, workspaces is used to facilitate the running and validating of the same chain by multiple entities.  With Workspaces companies and similar entities can create private networks that could be validated solely by a closed set of trusted entities. Each workspace is associated with a single organization and represents a distinct environment for setting up your blockchain projects.

Workspaces for the same chain can be deployed across different regions of a single cloud provider or even on different cloud providers. Creating workspaces within your organization enables you to tailor your blockchain environment according to your specific needs.

Here's an overview of the available workspace types:

- **Developer Workspace**: Designed to meet your development needs.
- **Professional Workspace**: Offers options for both mainnet and testnet deployments.


<img width="1500" alt="Screenshot 2023-08-24 at 19 20 03" src="https://github.com/calimero-is-near/docs/assets/39309699/8bf9b896-d607-4ec5-922e-e1145dde5fba"/>


## Creating a Developer Workspace

Follow these steps to create a developer workspace:

1. **Select Workspace Type**: After creating your organization, choose the **Developer Workspace** option.

2. **Add Workspace Details**: Provide the following information:
   - **Unique Identifier**: This could be a name or label for your workspace.
   - **Description**: A brief summary of the workspace's purpose.

<img width="1382" alt="Screenshot 2023-08-24 at 19 42 48" src="https://github.com/calimero-is-near/docs/assets/39309699/09f6d2d8-15db-4bc9-9d86-96f4b447e1b2"/>

3. **Personalize your chain**: Add a unique identifier and description for your chain and click on **Create Workspace & Chain**.

<img width="1498" alt="Screenshot 2023-08-24 at 19 59 17" src="https://github.com/calimero-is-near/docs/assets/39309699/ab084db3-b97e-4ac8-8020-330d00442aa1"/>

Your Developer Workspace will be created, and your shard will be set up within it.

<img width="1479" alt="Screenshot 2023-09-08 at 02 11 03" src="https://github.com/calimero-is-near/docs/assets/39309699/6d9253aa-1e36-417a-a126-6da400e841fd"/>

## Creating a Professional Workspace - Mainnet Environment

For a professional workspace with mainnet deployment, follow these steps:

1. **Select Workspace Type**: Choose the **Professional Workspace** option.

2. **Select Mainnet Workspace**: Select for the **Mainnet** environment if your smart contracts and applications are production-ready.

<img width="1495" alt="Screenshot 2023-08-24 at 19 43 26" src="https://github.com/calimero-is-near/docs/assets/39309699/b80b0bfb-dc36-4339-b658-e6fc6ee74cb9"/>

3. **Configure your workspace**: Set up the following for your Mainnet workspace:
   - **Validator nodes**: They are responsible for producing blocks and the security of the Calimero shard chain.
   - **RPC nodes**: They allow you to directly query the state of the Calimero shard chain
   - **Archive RPC nodes**: They hold all historical transaction and state of the Calimero shard chain 
   - **Indexer nodes**: They are used for storing historical data and provide indexes on top of this data to speed queries
<img width="1332" alt="Screenshot 2023-08-24 at 19 46 43" src="https://github.com/calimero-is-near/docs/assets/39309699/6d7356ec-9695-4c92-ae24-5a5907d498da"/>

4. **Personalize your chain**: Provide a unique identifier and description for your mainnet chain and click on **Next**.

<img width="1508" alt="Screenshot 2023-08-24 at 19 50 28" src="https://github.com/calimero-is-near/docs/assets/39309699/eadef6ef-0452-4026-afde-8d4ebd44098b"/>

Your Professional Workspace - Mainnet environment will be created, and your shard will be set up within it.
<img width="1479" alt="Screenshot 2023-09-08 at 02 11 03" src="https://github.com/calimero-is-near/docs/assets/39309699/6d9253aa-1e36-417a-a126-6da400e841fd"/>

## Creating a Professional Workspace - Testnet Environment

For a professional workspace with testnet deployment, follow these steps:

1. **Select Workspace Type**: Choose the **Professional Workspace** option.

2. **Select Testnet Workspace**: Opt for the **Testnet** environment if you are in the development, testing, or prototyping phase.

<img width="1495" alt="Screenshot 2023-08-24 at 19 43 26" src="https://github.com/calimero-is-near/docs/assets/39309699/b80b0bfb-dc36-4339-b658-e6fc6ee74cb9"/>

3. **Configure your workspace**: Set up the following for your Testnet workspace:
- Validator nodes: They are responsible for producing blocks and the security of the Calimero shard chain
- RPC nodes: They allow you to directly query the state of the Calimero shard chain
- Archive RPC nodes: They hold all historical transaction and state of the Calimero shard chain 
- Indexer nodes: They are used for storing historical data and provide indexes on top of this data to speed queries

<img width="1414" alt="Screenshot 2023-08-24 at 19 47 05" src="https://github.com/calimero-is-near/docs/assets/39309699/663d7f45-7c33-41aa-bfc8-ed023f71b217"/>

4. **Personalize your chain**: Provide a unique identifier and description for your Testnet chain and click on **Next**.

<img width="1508" alt="Screenshot 2023-08-24 at 19 50 28" src="https://github.com/calimero-is-near/docs/assets/39309699/eadef6ef-0452-4026-afde-8d4ebd44098b"/>

Your Professional Workspace - Testnet environment will be created, and your shard will be set up within it.
<img width="1479" alt="Screenshot 2023-09-08 at 02 11 03" src="https://github.com/calimero-is-near/docs/assets/39309699/6d9253aa-1e36-417a-a126-6da400e841fd"/>
