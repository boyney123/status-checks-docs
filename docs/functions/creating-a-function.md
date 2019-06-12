---
id: creating-a-function
title: Creating a function
sidebar_label: Creating a function
---

Your status-checks are just functions, the application will handle the rest.

Lets look at how you can add your first function.

> Before you write your first function you might want to have a [look at how to get setup](/docs/getting-started/setup). The status-checks project requires API Token and webhook integration setup.

##### Adding a function

First you will need to [clone the repository](/docs/getting-started/installation) if you haven't already.

Next create new folder called `my-first-function` in `src/tasks`.

> The `tasks` directory is where all your tasks will live. The application will read all functions in this directory and create status checks for them.

In this folder you will need two files:

- index.js (the function itself)
- metadata.json (optional data for the status check)

##### index.js

This is your function. You will need to export a function and that function will have to return a promise.

> Your function must return a promise to the application can handle async requests / actions. If you reject the status check will be marked as failure, if the promise resolves the status check will be marked as successful.

Here is a shell example of a function.

```js
module.exports = options => {
  const { setDescription } = options;

  // updates the status check description
  setDescription("Running my new function...");

  return new Promise(async (resolve, reject) => {
    // add some custom code here
    resolve("Everything passed");
  });
};
```

Here we have an example function that will get run when a pull request is made.

Your function will have an `options` parameter given to it. To understand what is in the `options` object please see the [API Docs](/docs/functions/api).

With the API you are given you can run custom commands with `ocotokit` or even run any command in the repo.

Here is an example of running some npm tests.

```js
module.exports = async options => {
  const { setDescription, runCommand } = options;

  // Updates the status with custom message
  await setDescription("Running tests");

  try {
    // run custom script, project already cloned and good to go
    await runCommand("npm run test");

    // status will be marked as successful
    return Promise.resolve();
  } catch (error) {
    // status marked as failed
    return Promise.reject();
  }
};
```

As you can see here we are calling `runCommand`. This will run a command inside your repository.

> Before the functions are run against your pull requests, the repo/sha is checked out. This means the application now has a local copy of your code. You can run `runCommand` to run any command in this repo.

If you want to understand how the API works in more detail or understand what is available please take a look at the [API Docs](/docs/functions/api).

##### metadata.json (optional)

This `json` can also side by the side of your function. This is where you can specify more details about your status check.

Here is an example of a `metadata.json` file.

```js
{
   // this is the title of the status check
  "title": "async-example",
  // this is the description of the status check
  "description": "Async example of GitHub function"
}

```

If you do not want to specify a `metadata.json` file the folder name of the function will be used as the title of your status check.

##### Other Examples

If you want to see more examples please look inside `src/examples` folder.

_We are aiming to build more examples over time_.
