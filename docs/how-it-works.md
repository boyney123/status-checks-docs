---
id: how-it-works
title: How it works
sidebar_label: How it works
---

`status-checks` project is split into two main parts, the `runner` and your `tasks`.

#### The runner

This is the core of the application. Ultimately tts job is to find and run your tasks.

The runner also does a few other things:

- Checks out the sha of the pull request (this allows you to run any command in your project)
- Creates its own status checks (gives you feedback on what the runner is doing with the pull-request itself)
- Is responsible for the integration with GitHub
- Creates [GitHub status checks](https://help.github.com/en/articles/about-status-checks) for each of your functions

> You will not have to do anything with the runner, all you have to do is provide the functions.

#### Your functions

You have to build and define your own functions. For each function a GitHub status check will be created. For example, in the screenshot below you can see some GitHub status checks. Each status check is defined by a function.

![Status Check Example](/img/pr-example.png "Status Check Example")

With each function you define you have the ability to run custom scripts, integrate with GitHub thanks to [octokit](https://github.com/octokit/rest.js) and update your status checks on the fly.

Your tasks will be defined within `src/tasks` and each task will have its own function and metadata file. If you want to know more about creating functions you [can read the documentation](/docs/functions/creating-a-function).

Once the application is [setup](/docs/getting-started/setup) and you have defined your functions you are good to go. Start raising pull requests and watch your functions run.
