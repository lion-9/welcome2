const Discord = require('discord.js');
const Nwaf = new Discord.Client();
Nwaf.on('ready', () => {
  console.log(`Logged in as ${Nwaf.user.tag}!`);

Nwaf.on('guildMemberAdd', member => {
const Nwaf= member.guild.channels.get("532997721305382912");
if(!Nwaf) return;
if(Nwaf) {
setTimeout(() => Nwaf.send("**Welcome to ruthlees..**"), 5550)
}
})
});
Nwaf.login(process.env.BOT_TOKEN);
