---
title: Event Hooks
sidebar_position: 9
---

## How to set up Event hooks from Calimero console
Event Hooks feature is not enabled by default. User needs to enable it manually in the Console UI opening Event Hooks in a side menu.

<img width="255" alt="All webhooks" src="https://user-images.githubusercontent.com/12198572/234869073-5eeef76a-a06f-4e53-98d8-b0728298d0c7.png"/>


Users may want to receive information when certain events occur in their shard. To achieve this, users can add a webhook that will receive notifications for the desired events.
From the console click on Add webhook button to register a webhook.

<img width="655" alt="All webhooks" src="https://user-images.githubusercontent.com/12198572/234868580-2b7c2702-fcd4-4e3b-b5f5-603abf1b188a.png"/>


To set up your webhook, you’ll need to:
- Provide a unique URL that can receive the event. This URL will  be registered in the console.
- (optional) Add Auth token: This is an option for users who do not want to have an open API to set authorization key which will be sent with every call in a header within a key “event-hooks-auth-token”
Select between defined action types or enter your own regex to match the logs.
- Define events

<img width="655" alt="Setup webhook" src="https://user-images.githubusercontent.com/12198572/234867963-a826f6d8-4d7d-4691-afb6-41743ab76b1a.png"/>


Click on Save. Once saved, you can access your webhook details

Note: Users can define multiple webhooks, each with its own unique URL. If a user wants to receive notifications for additional events at an existing URL, they can simply add those events to the existing webhook. This allows users to receive customised information for multiple events at the same URL, without having to create a new webhook for each event.

:::info
You can read more about event hooks in a separate section [Event Hooks](https://docs.calimero.network/event-hooks/introduction)
:::