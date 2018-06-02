const config = require("./config.json");
const prefix = config.prefix;
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.login(config.token);

bot.on("ready", () => {
    console.log(`Bot Ready! ${bot.user.username}`);
});

bot.on("message", message =>{    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let splitMessage = message.content.split(" "); //Splits message with a space as the dilimeter like: "Hello World" into ["Hello", "World"]
    let command = splitMessage[0]; //Takes the first arg it created above as the command. So "Hello" is the command.
    let args = splitMessage.slice(1); //Takes the command out for the list of args and assigns to the args variable.
    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`){
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#f11111")
            .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID: ", `${message.author.id}`);
        message.channel.send(embed);

        if(command === `${prefix}mute`){
            
        }

        return;
    }

});