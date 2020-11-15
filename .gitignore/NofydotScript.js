const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("--")
var prefix2 = ("?")

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "Coup de main --aide",
        }
    });
});

client.login(process.env.TOKEN);

client.on("message", (message) => {

    if (message.content === prefix2 + "secret"){
        message.channel.send("Voici des commandes secrètes : \n \n - ?afk \n \n - ?wp \n \n - ?tm \n \n - ?hs \n \n - ?catzzz \n \n - ?wtf \n \n - ?tonbonnetnofy \n \n Voilà tout, en plus elles sont nuls ces commandes.")
    }

}); // fermeture de bot.on('message') sinon Nofy va pas aimer

client.on("guildMemberAdd", (member) => {
    client.channels.get('552882976736673794').send(`Bienvenue à toi **${member}** mais tu peux retirer tes chaussures stp ?`);
})

client.on("guildMemberRemove", (member) => {
    client.channels.get('552882976736673794').send(`Bah voilà **${member.user.username}** est parti, moi je l'aimais bien mais bon ...`);
})

// version rb.1.0.1, le 14/11/2020 à 23h36 en appel avec SystemOfDragons via Discord (j'écris ça juste parce-que c'est classe)
