import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
if (process.env.NODE_ENV == 'dev') dotenv.config({ silent: true });

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on('ready', () => {
	console.log(`Bot ${client.user.username} is online!`);
});

client.login(process.env.BOT_TOKEN);