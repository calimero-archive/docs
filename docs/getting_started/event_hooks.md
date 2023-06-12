---
title: Event Hooks
sidebar_position: 9
---

The Event Hooks service is a centralized hub for handling event notifications from the `near-lake` stream. It enables users to receive near real-time events at user-specified URLs, ensuring timely notifications for specific events occurring within their shard.

## Setting up Event Hooks
To use the Event Hooks, you need to enable it manually in the Console by following these steps:

1. Open the [Calimero console](https://app.calimero.network/dashboard) and navigate to the **Event Hooks** section in the side menu.

2. Click on the **Enable feature** button.

<img width="1405" alt="Screenshot 2023-06-12 at 12 59 44" src="https://github.com/calimero-is-near/docs/assets/39309699/a4cf42ec-d4e3-480f-8b37-eea2111349ea"/>

3. Click on the **Add webhook** button to register a new webhook.

<img width="915" alt="Screenshot 2023-06-12 at 17 58 45" src="https://github.com/calimero-is-near/docs/assets/39309699/a892af76-60d1-4bb0-9f0b-5027a6321893">

4. Set up your webhook by providing a unique URL for event reception. Optionally, you can add an authorization token to enhance security. 

<img width="898" alt="Screenshot 2023-06-12 at 17 59 00" src="https://github.com/calimero-is-near/docs/assets/39309699/fa4f154a-f341-496c-9d10-27acbb594c0a">

5. Select the events you want to receive notifications for or enter your regex to match the logs.

<img width="921" alt="Screenshot 2023-06-12 at 18 23 43" src="https://github.com/calimero-is-near/docs/assets/39309699/f389932b-ce0f-4851-8215-6fdd97478f86">

6. Click on the **Save** button to save your webhook configuration.

<img width="885" alt="Screenshot 2023-06-12 at 18 34 19" src="https://github.com/calimero-is-near/docs/assets/39309699/75b5ed87-cb68-4af5-8ee4-ed1344876338">

Once saved, you can access your webhook details.

<img width="655" alt="All webhooks" src="https://user-images.githubusercontent.com/12198572/234868580-2b7c2702-fcd4-4e3b-b5f5-603abf1b188a.png"/>


Users have the flexibility to define multiple webhooks, each with a unique URL. If you wish to receive notifications for additional events at an existing URL, simply add those events to the existing webhook. This eliminates the need to create a new webhook for each event, allowing you to receive customized information for multiple events using a single webhook.

## Received event

Once a defined event occurs, you will receive the corresponding data on your configured webhook. Here is an example of a `FunctionCall` event:

<img width="655" alt="Setup webhook" src="https://user-images.githubusercontent.com/12198572/235001284-299923a0-4847-4131-9a6f-dc6990d19d65.png"/>
