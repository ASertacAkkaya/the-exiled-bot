# The Exiled (Bot)
This is a general DiscordJS bot that is named after Path of Exile, where the main character (you) is called "The Exile".

# Instructions
1. Clone the repository:
```bash
git clone https://github.com/ASertacAkkaya/the-exiled-bot.git
```
2. Install the dependencies.
```bash
npm ci
```
3. Starting the bot

	3.1. Start the the bot locally in dev mode with local .env file:
	```bash
	npm run start:dev
	```
	Don't forget to fill NODE_ENV=dev and tokens.

	3.2. If you're deploying to Heroku or otherwise where the environment variables will be passed externally, simply do:
	```bash
	npm run start
	```