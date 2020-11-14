const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("--")
var prefix2 = ("?")

bot.on('ready', function() {
    bot.user.setActivity("pour de l'aide: *Help");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "infoserveur"){
        var embed = new Discord.RichEmbed()
            .setTitle("Info du serveur")
            .setDescription("Quelques infos sur le serveur :")
            .addField("Nom Du Serveur", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Utilisateurs sur le Serveur", message.guild.memberCount)
            .setColor("0xB40431")
        message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "question")){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Petite question")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40431")
                .setTimestamp()
            message.channel.sendEmbed(embed)
            .then(function (message){
                message.react("✓")
                message.react("✗")
            }).catch(function() {
            });
    }


    if (message.content.startsWith(prefix + "sondage")){
        if(message.author.id == "449251922612846593"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :one: , :two: ou :three:")
                .setColor("0xB40431")
                .setTimestamp()
            message.channel.sendEmbed(embed)
            .then(function (message){
                message.react(":one:")
                message.react(":two:")
                message.react(":three:")
            }).catch(function() {
            });
            }else{
                return message.reply("Oulah pas possible déso :)")
    }}

    if (message.content === prefix + "news"){
        var embed = new Discord.RichEmbed()
            .setTitle("BOTINFO")
            .setDescription("Les « news » de Nofybot (le mot est stylé)")
            .addField("Adieu VRG","Nofydot est un remake de VRG Bot\n de nouvelles fonctionnalitées ont été ajoutées.\n Quelques répliques et des erreurs furent corrigés.(des erreurs de merde)", true)
            .addField("Changements","Le prefix principal a été changé.\n Certaines commandes n'ont plus besoin d'ID spécifique (admin)", true)
            .setFooter("Cette page est mise à jour en même temps que le BOT, logique en effet...")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "nani"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes questions")
            .setDescription("Voici les commandes pour avoir les réponses à vos questions")
            .addField("?nani","Affiche cette page ,-,", true)
            .addField("?secrets","Pour connaître quelques commandes secrètes !", true)
            .addField("?roles","Les rôles du serveur n'auront plus aucun secret", true)
            .addField("?jrejoins","Pour savoir quand tu as rejoins ce serveur", true)
            .addField("?VRG","Page qui parle de VRG BOT", true)
            .setColor("0xB40431")
            .setFooter("J'ai rien à mettre ici.")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "roles"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici les différents rôles du serveur")
            .setDescription("Ils servent à rien en vrai lol")
            .addField("cancer","Pour les cons", true)
            .addField("Admin","Pour les cons", true)
            .addField("EPIC RPG","C'est un bot", true)
            .addField("Groovy","C'est un bot aussi", true)
            .addField("Koya","C'est encore un bot", true)
            .addField("Jacky","En fait non", true)
            .setFooter("Et toi t'as quel rôle ?")
            .setColor("0xB40431")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "changelog"){
        if(message.author.id == "449251922612846593"){
            message.channel.send(" Les changements de la version rb1.0.1 (ptn c'est classe) : \n \n ~ Recode presque entier de VRG BOT \n \n ~ Changement de prefix de * à -- \n \n Trop de changements, j'ai la flemme d'écrire en fait.")
        }else{
            return message.reply(" Tu n'as pas accès au debug de la version rb1.0.1, désolé. \n C'est juste pour faire classe le **version rb bidule**")
    }}

    if (message.content === prefix2 + "jrejoins"){
        var embed = new Discord.RichEmbed()
        .setTitle("Voici la date à laquelle tu as rejoins le serveur")
        .addField("Tu as rejoins le :", message.user.JoinedAt)
        .setFooter("C'est précis")
        .setColor("0xB40431")
    message.channel.sendEmbed(embed);
    }

    //if (message.content === prefix + "JDQ"){
    //    message.channel.send("Voici ce à quoi je peux répondre: \n -Salut -salut \n -yop -black squad \n -coucou -youki \n -sava -ca va \n -ca va? -sava? \n -hey -hello \n -cava -re \n -vocal -voc \n -xxrom -vw974 \n -pk -tu joues \n -pomme -cc \n -tg -qui bs ? \n -qui bs -ya quelqu'un ? \n -ui -moi \n -napidou ? -aie \n -qui unturned? -yop qui unturned? \n -k -ohw \n -oh ok -toi tg \n -toi tg ptn -toi ftg \n -toi ftg ptn -ptn \n -je mange -ok je mange \n -bon jy go -salut VRG \n -youkouk -YoukYouk \n -pas moi -omg \n -waow -woaw \n -wow \n -K -L \n \n - Le BOT peut aussi répondre à d'autre messages \n mais ils n'apparraissent pas ici \n car ils sont secrets !");
    //} Commande désactivée mais j'ai pas envie de la supprimer ptn ça m'avait prit du temps

    if (message.content === prefix2 + "secret"){
        message.channel.send("Voici des commandes secrètes : \n \n - ?afk \n \n - ?wp \n \n - ?tm \n \n - ?hs \n \n - ?catzzz \n \n - ?wtf \n \n - ?tonbonnetnofy \n \n Voilà tout, en plus elles sont nuls ces commandes.")
    }

    if (message.content === prefix + "dev"){
        if(message.author.id == "449251922612846593"){
            message.reply("Bah c'est toi trou'd balle '-'") //au cas où j'aurais oublié tu vois :D
        }else{
        message.channel.send("Mon créateur est Zirafee, une flaque de merde.");
    }}

    if (message.content === prefix + "sitenofy"){
        message.channel.send("Le site de Nofydot est en cours de développement.")
        .setTimestamp()
        .setTimeout(function(){ 
            message.channel.send("Le site est codé en HTML + CSS par un branleur de première classe \n ça va pas arriver de suite :)")
        }, 5000);
    }
    // commande à mettre à jour quand le site sera opérationnel.

    if (message.content === "vadim"){
        message.channel.send("𝓥𝓐𝓓𝓘𝓜 𝓑𝓛𝓨𝓐𝓣 \n*happy russian noises*") // je ne possède malheureusement pas la ref :(
        .then(function (message){
            message.react(":sunglasses:")
        }).catch(function() {
        });
    }

    if (message.content === prefix2 + "catzzz"){
        message.reply("https://tenor.com/view/cat-cute-fall-funny-animals-frozen-gif-13908286")
    }

    if (message.content === prefix2 + "wtf"){
        message.reply("https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882")
    }

    if (message.content.startsWith(prefix + "repete")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .addField(thingToEcho)
            .setColor("0xB40431")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "youtube"){
        message.channel.send("Voici la chaîne de [Napidou](https://www.youtube.com/channel/UCp9Ad5p8AGpPzoXZCCLjeyQ)\n Et celle de [Zirafee] (https://www.youtube.com/channel/UCyaQOwSc7pPtftMsizczyFw)");
    }

    if (message.content === prefix2 + "tonbonnetnofy"){
        message.reply("J'ai bien mis mon bonnet anti-malware :) \n https://tenor.com/view/yama%C3%A7-yamac-beanie-fix-fixing-gif-17480699")
    }

    if (message.content === "t'es là nofy ?"){
        message.reply("https://tenor.com/view/haha-cat-weird-weirdo-walking-gif-4936419")
    }

    if (message.content.startsWith(prefix + "pub")){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            message.channel.send(`Petite pub de ${message.author.username} :`,thingToEcho)
    }

    if (message.content.startsWith(prefix + "tg")){
        if(message.author.id == "449251922612846593"){
            if (message.content === prefix + "tg nofydot"){
            message.reply(`Je vais pas me dire "tg" à moi même ${message.author.username}`)
            }else{
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            message.channel.send("J'avoue tg là ",thingToEcho)
        }}else{
            return message.reply("Nope, t'as pas le droit :sunglasses:")
        }
    }

    if (message.content === prefix + "admin"){
        if(message.author.id == "451455016251686912"){
            var embed = new Discord.RichEmbed()
                .setTitle("Commandes des Admins")
                .setDescription("Voici les commandes réalisables par le dictateur Raiden")
                .addField("--Sondage","Permet de créer un sondage.", true)
                .addField("--Changelog","Affiche le changelog (j'adore ce mot) de la dernière version \n Seul Zirafee peut faire cette commande", true)
                .addField("--tg 'insérer un nom'","Lâche un tg de la part de Nofydot à la personne visée par Raiden", true)
                .setColor("0xB40431")
                .setFooter("Les commandes ci-dessus sont réalisables par Raiden")
            message.channel.sendEmbed(embed);
        }else{
            return message.reply("Oh oh ça n'a pas l'air de fonctionner :(")
        }
    }

    if (message.content.startsWith("salut nofy")){
        message.channel.send(`Salut ${message.author.username} !`)
        .then(function (message){
            message.react(":sunglasses:")
        }).catch(function() {
        });
    }

    //if (message.content === "Napiversaire"){
    //    message.channel.send(`*Bon anniversaire* **Napidou** ! *Weeeeeeee !* De la part de **${message.author.username}** !`);
    //} commande désactivée, mais je la laisse quand même parce-que c'est un souvenir de VRG. Cette commande était à effectuer le 14 Décembre

    if (message.content === "re"){
        message.channel.send(`re **${message.author.username}**`);
    }

    if (message.content === "nofy"){
        if(message.author.id == "449251922612846593"){
            message.channel.send("Salut p'tite flaque :3")
        }else{
        message.channel.send("Heya")
    }}

    if (message.content === "salut Nofydot"){
        message.channel.send(`Le nom complet carrément, sacré ${message.author.username}`);
    }

    if (message.content === "?VRG"){
        if(message.author.id == "449251922612846593"){
            var embed = new Discord.RichEmbed()
               .setTitle("En hommage à VRG")
               .addField("VRG BOT","Les malwares auront eu raison de toi mon frère.\n Tu auras servis du mieux que tu le pouvais \n Mais finalement tu as envoyé des liens bit.ly dans le serveur...\n Adieu Vin Rage Gaming Bot tu étais sympatoche.", true)
               .addField("Satané Zirafee","T'aurais pû lui mettre un bonnet !", true)
               .setFooter("Salut mon pote ;(")
               .setColor("0x5E7BCF")
            message.channel.sendEmbed(embed);
        }else{
            var embed = new Discord.RichEmbed()
               .setTitle("En hommage à VRG")
               .addField("Vin Rage Gaming Bot","Est mon prédécesseur, les lignes de codes que j'utilise sont basées sur les siennes.",true)
               .addField("VRG BOT","Les malwares auront eu raison de toi mon frère.\n Tu auras servis du mieux que tu le pouvais \n Mais finalement tu as envoyé des liens bit.ly dans le serveur...\n Adieu Vin Rage Gaming Bot tu étais sympatoche.", true)
               .setFooter("Salut mon pote ;(")
               .setColor("0x5E7BCF")
            message.channel.sendEmbed(embed)
            .then(function (message){
                message.react(":sob:")
            }).catch(function() {
            });
        }
    }

    if (message.content === "ok"){
        if(message.author.id == "451455016251686912"){
            message.channel.send("ok Mr.Dictateur")
        }else{
            if(message.author.id == "449251922612846593"){
                message.channel.send("ok ok Zafira")
        }else{
            message.channel.send("ok :)")
    }}}

    if (message.content === prefix2 + "afk"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : AFK ?")
            .addField("AFK","Away From Keyboard", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : AFK !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "wp"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : WP ?")
            .addField("WP","Well Played", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : WP !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "tm"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : TM ?")
            .addField("TM","Team Work", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : TM !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "hs"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : HS ?")
            .addField("HS","Hard Scoop (dans le milieu du gaming)", true)
            .addField("HS","Hors Service (dans la vie quotidienne)", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : HS !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "aide"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes Nofydot")
            .setDescription("Voici les commandes que je peux effectué:")
            .addField("--aide","Affiche cette page d'aide", true)
            .addField("--dev","Affiche le pseudo de mon créateur", true)
            .addField("--youtube","Envoie les liens de deux chaînes Youtube sympatoches", true)
            .addField("--nofysite","Envoie le lien du site de Nofydot, oui, il a un site.", true)
            .addField("--admin","Cette commande montre les commandes que les admins peuvent effectué dans le salon des admins. \n Commande réalisable par Raiden uniquement.", true)
            .addField("--infoserveur","Cette commande permet de savoir la date de création du serveur et le nombre de membres.", true)
            .addField("--question 'insérer une question'","Simplement une commande pour poser une question (pas utile de ouf)", true)
            .addField("--news","Avec cette commande je peux voir les actus du moment à propos du serveur voir même plus.", true)
            .addField("--pub 'insérer sa pub'","Une commande pour faire ta pub comme un gros sale", true)
            .addField("--repete 'insérer truc à répéter'","Je répète ce que tu envoies, comme un con", true)
            .addField("?nani","Je sais pas, à toi de voir !", true)
            .setColor("0xB40431")
            .setFooter("Tu aimes les films de gladiateur ?")
        message.channel.sendEmbed(embed);
    }

}); // fermeture de bot.on('message') sinon Nofy va pas aimer

bot.on('guildMemberAdd', member => {
    bot.channels.get('552882976736673794').send(`Bienvenue à toi **${member}** mais tu peux retirer tes chaussures stp ?`);
})

bot.on('guildMemberRemove', member => {
    bot.channels.get('552882976736673794').send(`Bah voilà **${member.user.username}** est parti, moi je l'aimais bien mais bon ...`);
})

// version rb.1.0.1, le 14/11/2020 à 23h36 en appel avec SystemOfDragons via Discord (j'écris ça juste parce-que c'est classe)
