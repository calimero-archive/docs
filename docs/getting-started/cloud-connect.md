---
title: Set up Cloud Connect for your Cluster
sidebar_position: 3
---

:::info
This step is essential if you plan to self-host the shard. If you're not self-hosting, you can skip this step and proceed directly to creating organizations and workspaces.
:::

## What is Cloud Connect?
Cloud Connect is a feature within Calimero that empowers users to manage their infrastructure in a decentralized and secure manner. It allows you to interact with private chains and workspaces, providing the flexibility to use your own AWS/GCP account credentials to create your Kubernetes clusters. By connecting these clusters to your private chain and workspace, you can establish a powerful and customizable environment.

With Cloud Connect, you can:

- Utilize your own AWS/GCP account credentials to create Kubernetes (k8s) clusters.
- Seamlessly connect these clusters to your private chain and workspace.
- Maintain complete control over your data.

## Set up Cloud Connect for your Cluster

Follow these steps to set up Cloud Connect for your cluster:

1. Click on **Cloud Connect** to create your own cluster.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/da65f24d-8983-4fd2-868a-25149565b974"/>

2. Choose your preferred cloud provider from the available options. Calimero supports various cloud providers, such as AWS and GCP.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/26050920-b77b-4143-9f24-a471a3c6c3eb"/>

3. After selecting your cloud provider, you'll need to connect your cloud to Calimero by: 

- Opening your terminal
- Copy and paste the service account credentials provided by your cloud provider.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/02cd2f34-d3b1-4934-83e2-a1eac0158f7e"/>

Once completed, your cloud will be successfully connected.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/98f6de26-f12a-4e86-94cb-4985fa11bd14"/>

4. Specify a name for your cluster and choose the region where you want to create it. This step allows you to customize your cluster according to your needs.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/8d2b3afb-d182-477f-9234-d34ac0c36448"/>

5. Once you've configured the cluster settings, proceed to create the cluster. Calimero will initiate the cluster creation process.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/a42294ec-aa73-4738-8e92-3f24e3543c6"/>

Your cluster will be created successfully, and you can now create organizations and workspaces within it.

<img width="1492" alt="Screenshot 2023-08-24 at 10 41 09" src="https://github.com/calimero-is-near/docs/assets/39309699/e8bdebe1-e19e-4785-a024-c8bccf5ebfa6"/>
