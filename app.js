const Discord = require("discord.js");
const client = new Discord.Client();
// The code above makes the bot find the discord.js library and runs the client.


    client.on('ready', () => { 
    console.log('If this appears, the bot is online! :D');  
});
// The code above prints a message when the bot is started.
client.on('message', message => {
         if(message.content === ('!ping')){
        message.channel.send('PONG!');
    }
    // The code above is constructed of two things: message.content and message.channel.send. Translation: If the content of the message equals the message '!ping!, print a message in the same channel stating 'PONG!'.
});

client.login('insert_token_here')
// The code above lets the client login using its unique token. 
