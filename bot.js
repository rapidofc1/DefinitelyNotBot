const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '!ur mom') {
    	message.channel.send('**NO,** your mum.');
  	}
});

client.on('message', message => {
    if (message.content === '!whoisrapid') {
    	message.channel.send('**The super dank creator and owner of this server, obviously.** :grin:');
    }  

});
client.on('message', message => {
    if (message.content === '!botinfo') {
    	message.channel.send(':information_source: Well, here is my info!
                             "__**Bot Owner:**__ Rapid"
                             "__**Bot hosted on:**__ Heroku"
                             "__**Bot Version:**__ 1.0"');
    }
});
       
client.on('message', message => {
    if (message.content === '!bing') {
    	message.reply('BONG!');
  	}
});

if (message.content === "!8ball") { 	var sayings = ["It is certain",
                                                       "It is decidedly so",
                                                       "Without a doubt",
                                                       "Yes, definitely",
                                                       "You may rely on it",
                                                       "As I see it, yes",
                                                       "Most likely",
                                                       "Outlook good",
                                                       "Yes",
                                                       "Signs point to yes",
                                                       "Reply hazy try again",
                                                       "Ask again later",
                                                       "Better not tell you now",
                                                       "Cannot predict now",
                                                       "Concentrate and ask again",
                                                       "Don't count on it",
                                                       "My reply is no",
                                                       "My sources say no",
                                                       "Outlook not so good",
                                                       "Very doubtful"]; 			
                                   var result = Math.floor((Math.random() * sayings.length) + 0);			
                                   bot.reply(message, sayings[result]); 
    }


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
