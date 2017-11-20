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
    	message.channel.send(':information_source: Well, here is my info! __**Bot Owner:**__ Rapid, __**Bot hosted on:**__ Heroku, __**Bot Version:**__ 1.5');
    }

});
message.author.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "**Help**",
                description: `**These are all available commands.**\n`,
                fields: [{
                    name: `!botinfo`,
                    value: `Convert any string to a base64 string.\n__Example__: ${config.prefix}to64 oliver is the best`
                },
                {
                    name: `!whoisrapid`,
                    value: `Convert any base64 string to a UTF-8 string.\n__Example__: ${config.prefix}from64 b2xpdmVyIGlzIHRoZSBiZXN0`
                },
                {
                    name: `tobin`,
                    value: `Convert any string to a binary string.\n__Example__: ${config.prefix}tobin oliver is amazing`
                },
                {
                    name: `frombin`,
                    value: `Convert any binary string to a UTF-8 string.\n__Example__: ${config.prefix}frombin example`
                },
                {
                    name: `kick`,
                    value: `Kick a certain member with a reason\n__Example__:  ${config.prefix}kick @badmember being bad`
                },
                {
                    name: `ban`,
                    value: `Ban a certain member with a reason\n__Example__: ${config.prefix}ban @badboi being a bad boi`
                },
                {
                    name: `purge/prune`,
                    value: `Delete a certain amount of messages.\n__Example__: ${config.prefix}purge 5`
                },
                {
                    name: `uptime`,
                    value: `Display how long i have been up for (HH:MM:SS)\n__Exmaple__: ${config.prefix}uptime`

                },
                {
                    name: `ping`,
                    value: `Display the local ping and the API ping\n__Example__: ${config.prefix}ping`
                },
                {
                    name: "stats",
                    value: `Display various stats about the bot (currently only CPU and Memory Usage)\n__Exmaple__: ${config.prefix}stats`
                },
                {
                    name: "8ball",
                    value: `Answer a question\n__Example__: ${config.prefix}8ball is amra gay?`
                },
                {
                    name: "anim/animate",
                    value: `Animate text by editing it with a 250ms interval\n__Example__: ${config.prefix}animate ay this is pretty cool`
                },
                {
                    name: "prefix",
                    value: `Change prefix\n__Example__: ${config.prefix}prefix +`
                },
                {
                    name: "meme",
                    value: `Create a meme\n__Example__: ${config.prefix}meme list\n ${config.prefix}meme xy | what is | this`
                },
                {
                    name: "big",
                    value: `Make text bigger\n__Example__: ${config.prefix}big hello world!`
                },
                {
                    name: "translate",
                    value: `Translate text from one to another\n__Example__: ${config.prefix}translate en nl Hello World!`
                },
                {
                    name: "aes",
                    value: `A E S T E T H I C S\n__Example__: ${config.prefix}aes hello world`
                },
                {
                    name: "dog",
                    value: `Send a random image of a dog\n__Example__: ${config.prefix}dog`
                },
                {
                    name: "cat",
                    value: `Send ascii art of a random cat\n__Example__: ${config.prefix}`
                },
                {
                    name: "birb",
                    value: `Send a random picture of a bird\n__Example__: ${config.prefix}birb`
                },
                {
                    name: "gif",
                    value: `Send a gif\n__Example__: ${config.prefix}gif that escalated quickly`
                },
                {
                    name: "weather",
                    value: `Get the weather of any city\n__Example__: ${config.prefix}weather stockholm`
                }
                ],
                timestamp: new Date(),
                footer: {
                    value: requestBy,
                    icon_url: client.user.avatarURL,
                }
            }
        });
    }
});
       
client.on('message', message => {
    if (message.content === '!bing') {
    	message.reply('BONG!');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
