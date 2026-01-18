const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const CHANNEL_ID = "1462585823433195623";

client.once("ready", async () => {
  console.log("🌧️ Rain bot online");

  setInterval(async () => {
    const rain = Math.random() < 0.1;
    if (rain) {
      const channel = await client.channels.fetch(CHANNEL_ID);
      channel.send("🌧️ RAIN JUST POPPED!");
    }
  }, 10000);
});

client.login(process.env.BOT_TOKEN);
