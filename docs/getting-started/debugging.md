---
id: debugging
title: Debugging
sidebar_label: Debugging
---

After you have [setup your webhook](docs/getting-started/setup#configure-github-to-use-the-webhook), GitHub give you a nice way to replay events.

#### Retrigger Events

Navigate to your repository and the webhook you [previously setup](docs/getting-started/setup#configure-github-to-use-the-webhook).

If you scroll down you should see a list of recent deliveries.

> These are all events that have been generated and gone through your webhook.

![Events](/img/docs/debug/events.png "Events")

If you navigate through the events you should see an event that was raised for your pull request.
This is an example of what you are looking for.

![Pull request event](/img/docs/debug/pull-request-event.png "Pull request event")

If you hit the button `Redeliver` button this will re-trigger the event again and `status-checks` will run your functions again.
