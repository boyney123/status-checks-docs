---
id: how-it-works
title: How it works
sidebar_label: How it works
---

There is two main parts to this application the `runner` (GitHub integration) and your functions.

The main idea is you write some custom functions and the `runner` knows how to handle the rest. The `runner` will go through each function and trigger it.

> Its worth nothing that your custom functions have to return a **Promise**. This allows the runner to handle async tasks.

With every function you build you have access to an [octokit](https://github.com/octokit/rest.js) instance and also some custom API's to allow you do easily integrate with GitHub future if you wanted too.

> Example: If you wanted to change the status check description as tasks happen, you can call the function `setDescription` which will update the description for you.

Once `status-checks` is running, you have to setup GitHub (webhooks) to post information to the application.
