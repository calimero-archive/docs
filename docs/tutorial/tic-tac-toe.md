---
title: How to build a dApp Tic Tac Toe game on Calimero
sidebar_position: 3
---

This tutorial will guide you through the process of creating your Tic Tac Toe dapp using the Calimero network.

## Prerequisite

Before you begin, ensure that you have the following prerequisites in place:

- Set up your [Calimero private shard](https://docs.calimero.network/getting_started/set_shard)
- A code editor like [VSCode](https://code.visualstudio.com/download)
- Install the [NEAR CLI](https://docs.near.org/tools/near-cli#setup) tool
- Install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your machine
- Install the [Rust and WASM](https://docs.near.org/develop/contracts/introduction#rust-and-wasm) toolchain

## Step 1: Generate an auth token

Before deploying the voting smart Dapp, you need to generate a Calimero auth token. This token will authenticate and authorize external applications to communicate with your shard.

Follow the steps provided [here](/docs/getting_started/generate_token.md) to generate an auth token for your Calimero shard.

## Step 2: Set up the NEAR CLI

To interact with your Calimero shard using NEAR CLI, set the token value using the command `near set-api-key`.

Follow the steps provided [here](/interact/cli#set-up-the-near-cli-to-access-the-shard-via-cli) to set up the NEAR CLI.

## Step 3: Create a keypair

A keypair for a shard account consists of a public key and a corresponding private key. To generate a new keypair for the shard account:

- Set the SHARD_ID environment variable in your command-line interface

```bash
export SHARD_ID="your_shard_name"
```

Make sure to replace **"your_shard_name"** with the name of your shard.

- Run the `near generate-key` command to generate a key for your shard

```bash
near generate-key $SHARD_ID.calimero.testnet --networkId $SHARD_ID-calimero-testnet
```

- Navigate to the `~/.near-credentials/` folder to locate the generated keypair file which is in a `.json` format. Alternatively, you can locate it by running the following command in your terminal:

```bash
cd ~/.near-credentials/network-id/account-id.json
```

:::info
Take note of the **account_id**, **private_key**, and **public_key** values from the **.json** file.
:::
