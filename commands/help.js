module.exports.run = async(bot,msg,args) => {
    const Discord = require('discord.js');
    const RichEmbed = new Discord.RichEmbed();
      
    var embed = new Discord.RichEmbed()
    .setTitle('Commands')
    .setColor('RANDOM')
    .setDescription('The current prefix for the bot is `!`.Please start every commands with `!`.\n`ping`-checks the response time of the bot.\n`clear`-clears the messages in that channel.USAGE-`!clear 30` clears the last 30 messages in the channel')
    .setFooter(`requested by ${msg.author.tag}`)

 msg.channel.send(embed);
}

module.exports.config = {
    command : "help"
}
