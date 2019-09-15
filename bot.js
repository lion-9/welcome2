const Discord = require('discord.js');
const satam = new Discord.Client();
satam.on('ready', () => {
  console.log(`Logged in as ${satam.user.tag}!`);

satam.on('guildMemberAdd', member => {
const satam= member.guild.channels.get("617940864743899136");
if(!satam) return;
if(satam) {
setTimeout(() => satam.send("** WELCOME TO SILENT♚ **"), 5550)
}
})
});
satam.login(process.env.BOT_TOKEN);
