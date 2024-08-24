const Discord = require('discord.js');
const talkedRecently = new Set();
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async (client, message, args) => {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
      //Yoda Code , Telif Hakları Vardır, https://d//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5iscord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :envelope: `)
  const linqo = `https://habbofont.net/font/palooza/${yazi}.gif`
  .replace(' ', '+')
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  const embed = new Discord.MessageEmbed()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setTitle("Logo")
  .setColor("RANDOM")//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setImage(linqo)
  .setFooter('Sarı Logo Oluşturuldu')//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(embed)
}
exports.conf = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    enabled: true,
    guildOnly: false,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {
    name: 'sarı',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    description: 'Yazdığınız yazıyı bannera çevirir.',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    usage: 'sarı <yazı>'
}//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5