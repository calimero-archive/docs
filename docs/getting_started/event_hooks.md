---
title: Event Hooks
sidebar_position: 9
---
Event hooks service will receive all events from the near-lake stream.
It will then check the defined webhooks and based on filters either call the destination service or not. Destination service is the user defined service whose URL is set when creating a webhook. That service may have an open endpoint or require an auth token for access.
User can add an authorization token when creating a webhook.User can specify with a webhook authorization mechanism so the service can authorise incoming data.


## How to set up Event hooks from Calimero console
Event Hooks feature is not enabled by default. User needs to enable it manually in the Console UI opening Event Hooks in a side menu.

<img width="255" alt="Side menu" src="https://user-images.githubusercontent.com/12198572/235000034-6dc5dae8-9b43-4e0a-aff0-ad3810304227.png"/>

Users may want to receive information when certain events occur in their shard. To achieve this, users can add a webhook that will receive notifications for the desired events.

1. From the console, click on **Add webhook** button to register a webhook.

<img width="655" alt="All webhooks" src="https://user-images.githubusercontent.com/12198572/234868580-2b7c2702-fcd4-4e3b-b5f5-603abf1b188a.png"/>


2. To set up your webhook, you’ll need to:
- Provide a unique URL that can receive the event. This URL will  be registered in the console.
- (optional) Add Auth token: This is an option for users who do not want to have an open API to set authorization key which will be sent with every call in a header within a key “event-hooks-auth-token”
Select between defined action types or enter your own regex to match the logs.
- Define events

<img width="655" alt="Setup webhook" src="https://user-images.githubusercontent.com/12198572/234867963-a826f6d8-4d7d-4691-afb6-41743ab76b1a.png"/>

3. Click on **Save**. Once saved, you can access your webhook details

Users can define multiple webhooks, each with its own unique URL. If a user wants to receive notifications for additional events at an existing URL, they can simply add those events to the existing webhook. This allows users to receive customised information for multiple events at the same URL, without having to create a new webhook for each event.

## Received event
When defined event occur in the blockchain user will receive data on his webhook. This is the example of a **FunctionCall**

<img width="655" alt="Setup webhook" src="https://user-images.githubusercontent.com/12198572/235001284-299923a0-4847-4131-9a6f-dc6990d19d65.png"/>
