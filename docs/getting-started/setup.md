---
id: setup
title: Setup
sidebar_label: Setup
---

`status-checks` needs to be setup in order for it to work with your repository. We will need to:

- Setup an API Token
- Setup a Webhook and secret

# Setting up an API Token

`status-checks` needs an GitHub API token in order to read and write to your repository. The application makes requests to create and edit status checks, and you might also want to do other things with the [octokit](https://github.com/octokit/rest.js) api that is exposed to you.

You can read the [documentation from GitHub](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) or follow the steps below.

#### API Token

##### Steps

- Login to GitHub and go to your Settings.
- Click on `Developer Settings` on the settings menu.
- `Personal Access Tokens` on the Developer Settings menu.
- Click `Generate new token` to create a new token for this application. (insert something useful to name the token for example: `status-check-app`)

Next select the scopes for the token.

_image_

Once you have selected them, click `Generate token`.

This will show you a screen with your GitHub token. Copy this value.

> Remember, never let anybody get access to your Tokens and never commit them back into the project.

##### Add token to project

If you have the project [cloned on your machine](/docs/getting-started/installation#cloning-the-project) open the project and edit the `.env-example` file.

First rename the file to `.env` (this is used to store your environment variables). Inside the file you should see:

```
GITHUB_TOKEN=
GITHUB_SECRET=
```

You want to copy your token into the `GITHUB_TOKEN` variable.

_Example_

```
GITHUB_TOKEN=MY_GITHUB_TOKEN
GITHUB_SECRET=
```

Thats the token part setup. Lets now setup the webhook.

# Setting up a Webhook and secret

We need to integrate GitHub with your application and functions. GitHub will send events (through webhooks) to `status-check` application, and the application will execute your functions. (you can read more on [how it works here](/docs/how-it-works))

Here is the offical documentation on [how to setup a webhook](https://developer.github.com/webhooks/creating/).

#### Adding a webhook

In order to setup a webhook you will need this application running somewhere. You have two options:

- Host it yourself
- Running the application locally for development

We will focus on `running locally` for now

> If you want to host this application that is fine. This guide will not explain how to host the application, you do host it using various platforms (AWS, Now.sh, etc.). Once you have your application hosted you will need to change the webhook url to point to your hosted url.

##### Setup webhook with locally running project

First you need to run the project. Go into the project and run

```
npm install && npm start
```

This should start the application on `localhost:3000`.

Next we want to expose this port (so GitHub can view it). You have two options here:

- Use [ngrok](https://ngrok.com/)
- Use [inlets](https://github.com/alexellis/inlets) - Expose your local endpoints to the Internet

We will use `ngrok` in this example.

If you open up a new terminal and run `npx ngrok http 3000`. This will setup ngrok and expose your application running on port 3000.

_IMAGE_

Take one the `Forwarding` urls, and copy it.

<hr />

- Apply the url to webhook
- Add the secret
- Running an example
