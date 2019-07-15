const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600365598534533122
")
setInterval(function() {
channel.send(`khaled Holy`);
}, 30)
})

client.login(process.env.BOT_TOKEN);