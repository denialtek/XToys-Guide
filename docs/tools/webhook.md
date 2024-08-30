---
lang: en-US
title: Webhook
description: 
---

# Webhook

Webhooks allow you to communicate with XToys Scripts/Teases using GET or POST requests, or over a websocket.

## Webhook Types

XToys has two different types of webhooks:

* **Private Webhook** - A webhook that only you can connect to within XToys
* **Shared Webhook** - A webhook that multiple people can connect to within XToys

## Creating a Webhook

1. Vist your [profile](https://xtoys.app/me) (by clicking your username in the sidebar).
2. Under the Private Webhook or Shared Webhooks section create a new webhook. Private Webhooks just have a Webhook ID, and Shared Webhooks have both a Webhook ID and an Auth Token.

## Using a Webhook

Webhook messages must have an *action* key, must have the *Webhook ID*, and if using a Shared Webhook must also include the *Auth Token*. The message may also optionally include any other key/value pairs.

The XToys script will receive the action value and any other key/value pairs sent to the webhook.

The action key can have any value. In the XToys Script you can configure a trigger to react based on the supplied action.

:::tip GET Message

[https://webhook.xtoys.app/&lt;webhookid&gt;?action=&lt;actionname&gt;](https://webhook.xtoys.app/&lt;webhookid&gt;?action=&lt;actionname&gt;)

Example:  
[https://webhook.xtoys.app/ABCD1234?action=setintensity&intensity=50](https://webhook.xtoys.app/ABCD1234?action=setintensity&intensity=50)
:::

:::tip POST Message

[https://webhook.xtoys.app/&lt;webhookid&gt;](https://webhook.xtoys.app/&lt;webhookid&gt;) with a JSON formatted message content that includes an action key.

Example:  
[https://webhook.xtoys.app/ABCD1234](https://webhook.xtoys.app/ABCD1234)

Content:  
{
    "action": "rampto",
    "intensity": 100,
    "seconds": 5
}
:::

:::tip Websocket

[wss://webhook.xtoys.app/&lt;webhookid&gt;](wss://webhook.xtoys.app/&lt;webhookid&gt;) and then send JSON formatted messages.

Example:  
[wss://webhook.xtoys.app/ABCD1234](wss://webhook.xtoys.app/ABCD1234)

And then send JSON formatted strings:  
{
    "action": "rampto",
    "intensity": 100,
    "seconds": 5
}
:::

## Shared Webhooks
For Shared Webhooks an Authorization Header must be included in the message with the value 'Bearer &lt;authtoken&gt;'.

Example:  
Authorization: Bearer fd03kf0dk3430adfd

:::danger Auth Token Privacy
Your Auth Token should be treated like a password and not be shared with other users. Instead just provide other users the Webhook ID which they will then enter into the Script/Tease.
:::

## Additional Notes

Webhooks can also send data from XToys to your custom code. To send outbound messages you must check the **Script can send outbound messages** option when adding the Private Webook block connection to the script.

Outbound messages only work when connecting to the Webhook via the Websocket message.
