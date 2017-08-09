const Discord = require("discord.js");
const client = new Discord.Client();
// The code above makes the bot find the discord.js library and runs the client.


    client.on('ready', () => { 
    console.log('If this appears, the bot is online! :D');  
});
// The code above prints a message when the bot is started.
client.on('message', message => {
      let prefix = "!;
   // The code above creates a prefix !
  if (!message.content.startsWith(prefix)) return;
         if(message.content === (prefix + 'ping')){
        message.channel.send('PONG!');
    }
    // The code above is constructed of two things: message.content and message.channel.send. Translation: If the content of the message equals the prefix we've set below and the message '!ping!, print a message in the same channel stating 'PONG!'.
    
    function rolldice() {
  var rand = ['**1.**', '**2.**', '**3.**', '**4.**', '**5.**', '**6.**'];

  return rand[Math.floor(Math.random() * rand.length)];
}
    // This creates a function called rolldice and sets random variables for it.
if (message.content === (prefix + "rolldice")) {
  message.channel.send('You rolled ' + rolldice());
}    
    // This code not only executes a response, but also executes the function rolldice by using one of the random variables (refer to comment above).
});

client.login('insert_token_here')
// The code above lets the client login using its unique token. 
