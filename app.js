const Discord = require("discord.js");
const client = new Discord.Client();



    client.on('ready', () => { 
    console.log('If this appears, the bot is online! :D');  
});

client.on('message', message => {
         if(message.content === ('!ping')){
        message.channel.send('PONG!');
    }
});

client.login('insert_token_here')