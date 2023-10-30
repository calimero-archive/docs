---
sidebar_position: 1
sidebar_label: Home
description: Calimero private shard provides security and scalability for your business needs
slug: /
image: https://github.com/calimero-is-near/docs/assets/39309699/701bb5e3-fb3e-42b6-8600-4d54e12decd2
---

# What is Calimero?

<head>
 <meta name="google-site-verification" content="qWc3HXwmKaTVz0rgOkphzeV-XayHbQbafzqfXqRnf7w" />
</head>


Calimero is a customizable sidechain built on top of NEAR protocol. It can be viewed as a network of networks. A solution for businesses to access privacy features and enable scaling. Calimero provides you with an infrastructure which shares all the best benefits of NEAR while being enhanced with multiple new features with emphasis on privacy. 

Calimero enables you to:

- Spin off your own private shards (think of a shard as a small private blockchain network that you own)
- Communicate between your shards and other networks, or between multiple shards (even if the shards are owned by different companies)


## Calimero X Open Web

Calimero is at the forefront of building a more user-centric web: the Open Web. Our goal? To give users, communities, and businesses the tools they need to truly own and control their data. Think of it as having the convenience of popular software services, but hosted by you, where your data stays yours.

We've leveraged the power of the NEAR Protocol and the Blockchain Operating System (BOS) to create this platform. With Calimero, you get a private space online where you're in control.  It comes equipped with a range of open-source apps that you can customize and manage according to your needs. They offer the familiarity of the software services you're accustomed to, but with enhanced benefits like security and true ownership. Calimero and the Open Web offer a pathway to this new era of digital ownership. Dive into a digital realm where privacy isn't a luxury—it’s a right. 

## Calimero X BOS

The integration of BOS and Calimero accelerates front-end development for both projects. Calimero's private blockchain characteristics ensure data security and ownership. Users can enjoy advanced functionalities, leading to an enhanced Web3 experience.

## Calimero private shard

Calimero private shards are independent networks and do not share validators, execution and state storage. NEAR Protocol is a blockchain that has been built from the ground up to be high-performant, incredibly secure, and infinitely scalable all while supporting sustainability and Calimero shards share all the benefits.

Calimero shards support three main modes of operation:

- Permissioned Private Calimero Shard owned by a single entity

- Permissioned Private Calimero Shard owned by a consortium

- Community Calimero Shard owned by a community

Calimero shards can support up to 200k transactions per second, but a standard one shard deployment has the throughput of 5k transactions per second.

## Features

- Interoperate with open source protocols and applications to enhance your application, from DeFi to NFTs.

- [Swap your assets](https://docs.calimero.network/bridge/bridging/prerequisites) between private chains and other public blockchains seamlessly. 

- With Calimero, you can perform [cross-shard](https://docs.calimero.network/bridge/bridging/cross_shard_calls) transactions, which allow you to interact with other third parties on the public chain or other permissioned enterprise shards. 

- With the [Calimero SDKs](https://docs.calimero.network/calimero_sdk/installation), you can make smart contracts from private shards can call into public blockchain to interact with those applications.

- Public smart contracts if setup can also call into private shard’s contracts (extended trust model, similar to Oracles).

- An encrypted channel can be used for private shards to interact with each other. 


## Benefits of using private shards by Calimero network

Calimero’s private shards have all the benefits of NEAR in terms of high performance, security and sustainability. But as an important distinction, shards are not using NEAR’s validators, execution and state storage, but rather you’re using your own. The main benefits include:

1. **Scalability**: Scaling your business by having access to free transactions within the shard.

2. **Security**: Making part (or all) of your transactions private, with only people/entities with the access to the shard being able to view the data.

3. **EVM compatibility**: You can use DApps already built on Ethereum mainnet instead of building them from scratch.

4. **WASM compatibility & Javascript support**:  This makes is for easy onboarding to web3

5. **Interoperability**: Shards can communicate with the NEAR mainnet, and between themselves (each shard can represent a different company or parts of the same company ), and thanks to the bridge, multiple different assets such as fungible and non-fungible tokens can be transferred.

6. **Customizable, performant and cost efficient**: It’s possible to perform up to 200.000 transactions per second (standard shard deployment has the throughput of 5.000 transactions per second). Block times, contract sizes and gas limits are customizable. Bridging the assets or calling data is fast (5-10sec) and cheap (it costs a couple of cents).

## Who are Calimero’s private shards for?

Calimero can be used:

- As a gateway for traditional (web2) businesses to get into the web3 world with an easy to use dashboard for managing their private shard.

- For businesses already operating in web3 who need zero gas scaling and privacy features.

## Which industries can Calimero be used in?

There are countless use cases, as only the imagination is the limit. To provide some inspiration, we’ve listed a couple different industries where private shards achieve their full potential.

- **Governments**: Think of banks implementing CBDC, or KYC & anti-money laundering use cases. The private data is stored on a shard, and can be available when needed, but is otherwise hidden from the public.

- **Fintech**: Digital assets and tokenization of financial assets, AML, KYC and digital identity, credit scoring, capital markets, trade finance, privacy solutions (for custody and treasury management).

- **Infrastructure**: For companies into energy, healthcare, insurance, real estate, telecommunications, supply chain… For example in the supply chain/transportation industry, you can use Calimero to verify data, keep track of the shipment across multiple companies (each with its own shard) and even buy/sell the goods while they’re still in transport.

- **Web3**: DAOs, DeFi, CeFi - think of all the operations within them, including orderbook, darkpools, treasury management and contributors payroll, Also in gaming, metaverse, entertainment, publishing (art, music, NFTs).

- **Gaming**: Example of using private shards in gaming: you start a chess game on the mainnet. You bridge the whole game to a private shard. On it, the game plays out for FREE and the moves are hidden (unless you want to reveal them). You bridge the outcome back to the mainnet. And voila!


## What you can do with Calimero

- Learn how to spin up your own [private shard](/) from the console

- Learn how to transfer tokens/assets using th [Calimero Bridge](https://docs.calimero.network/bridge/architecture)

- Learn how to use the [Calimero SDKs](https://docs.calimero.network/calimero_sdk/installation) to make smart contract calls

## New to Calimero?

Refer to our **Console** documentation to set up and run your Calimero private shard in just a few minutes. You will learn how to:

- [Set up your private shard](/docs/getting-started/signup.md)
- [Generate auth tokens](/docs/console/custodial.md)
- [Bridge assets between NEAR and Calimero to your private shard](/docs/console/bridge_console.md)
- [Add users to your private shard](/docs/console/adding_users.md)
- [Install applications in marketplace](/docs/console/market_place.md)

Or go through the [Calimero tutorials](/) to learn how to:

- [How to deploy a voting smart contract Dapp](/docs/tutorial/voting-tutoral.md)
- [How to bridge FT tokens from NEAR to Calimero](/docs/tutorial/bridging-ft-token.md)
- [How to build a Tic Tac Toe game on Calimero](/docs/tutorial/tic-tac-toe.md)

## Continue learning

If you have technical questions, reach out via [support@calimero.network](mailto:support@calimero.network) or [https://www.calimero.network/trial](https://www.calimero.network/contact).
