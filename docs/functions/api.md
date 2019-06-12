---
id: api
title: API
sidebar_label: API
---

Every function you create has access to an API. This API will allow you run commands, integrate back with GitHub and more.

> The API was designed to help you build functions. If you have any API requests or ideas please feel free to contribute.

Every function will have the following in the parameters

- [octokit](#octokit-object) - object
- [runCommand](#runcommand-function) - function
- [setDescription](#setdescription-function) - function

Example:

```js
module.exports = options => {
  // API
  const { octokit, runCommand, setDescription } = options;

  return new Promise(async (resolve, reject) => {
    resolve("Everything passed");
  });
};
```

##### octokit (object)

`status-checks` project uses [octokit](https://octokit.github.io/rest.js/) to integrate with GitHub. The `octokit` object (which is configured down stack) is exposed to you through this API.

This should allow you to integrate with GitHub using the [octokit](https://octokit.github.io/rest.js/) API.

If you would like to know more please read the [documentation for octokit](https://octokit.github.io/rest.js/).

##### runCommand (function)

`runCommand` is a function that allows you to run any custom command in the repo directory.

> Before your functions run the sha of the pull request is cloned locally. `runCommand` will take a given command and run it inside the pull request working directory.

```js
// Example of running npm test
runCommand("npm test");
// example of running a custom npm script
runCommand("npm run myCustomScript");
// example of running some bash
runCommand("echo Hello");
```

If `runCommand` exits with a non 0 status code than your function will fail and
GitHub will be notified.

##### setDescription (function)

This is a helper function that allows you to update the GitHub status description.

This is great to give develoeprs feedback whilst your function is being run.

For example, if your function done 4 async tasks, then you could use `setDescription` to give an update at each state.

```js
setDescription("Running tests...");
runCommand("npm test");

setDescription("Running e2e tests...");
runCommand("npm run e2e");

setDescription("Running lint ...");
runCommand("npm run lint");
```

In the example above, three async tasks would be run and whilst each task is waiting to be executed the description will be updated giving developers feedback.
