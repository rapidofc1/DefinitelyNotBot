const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'ur mom') {
    	message.channel.send('**NO,** your mum.');
  	}
});

client.on('message', message => {
    if (message.content === 'whoisrapid') {
    	message.channel.send('**The super dank creator and owner of this server, obviously.** :grin:');
  	}
    
});

client.on('message'.mmessage => {
  Case "8ball":
    If (args[1]) message.channel.send(fortunes[math.floor(math.random()*fortunes.length)]);
    Break;

    }
client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
