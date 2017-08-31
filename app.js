//Bot script coded by SerialCereal
//No copyright, script is free to use for any means necessary.
//I don't take responsibility for any harm that happens to your computer or anything else.
//I will write comments like these below code that needs to be explained in order to assure you can learn how to reproduce bot scripts.

const Discord = require("discord.js");
const client = new.Discord.Client();
//Line 6: Script relies on discord.js which is the primary library for the Discord API usable by Javascript.
//Line 7: Allows the script to connect to the Discord client.

client.on('ready', () => {
	console.log('The bot is officially online!')
});
//Line 11, 12: Displays a console.log when the bot is launched.

client.on('message', message => {
	let prefix = "<";

	if (!message.content.startsWith(prefix)) return;
//Line 16: On every message the events in this client.on group will check to see if events in it can be run and if criteria is met, it'll run them.
//Line 17: This creates a prefix.
//Line 19: This will make an event happen only if a message starts with the prefix.

    if (message.content === (prefix + "ping")) {
		message.delete()
	.then (message.channel.send("Pong! I am still online!"));
	}
//Line 24-26: This is a fine example of an if statement. If the message content is the prefix plus ping, the command will be deleted and issue a response in a form of a message sent directly to the channel the command was typed in.

          function rollDice() {
    var rand = 1 + Math.floor(Math.random() * 6);

    return rand;
}
if(message.content === (prefix + "rolldice")){
    message.delete()
    .then(message.channel.send('You rolled ' + '**' + rollDice() + '.**'));
    }
//Line 30: This creates a function named rollDice.
//Line 31: A variable is created called rand, which will send a random number from 1 to 6. The thing is that it won't include decimals, because we used Math.floor.
//Line 33: This makes the function return the value rand when called.
//Line 35-37: Again, this does the same thing as lines 24-26 (referencing documentation in line 28), except we use multiple messages plus calling the function, separated by the mark +.

});

client.login('insert_bot_token_here')
//Line 46: This line uses the client login token that is provided by discord for your bot to use.
//If you want me to update the script or have encountered any problems with it, let me know.