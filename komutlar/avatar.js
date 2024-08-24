const Discord = require('discord.js');//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
exports.run = (client, message, args) => { //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

         
        talkedRecently.add(message.author.id);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
      
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let mention = message.mentions.users.first();//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  sender = message.author.username;
} else {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  sender = message.channel.guild.member(message.author).nickname;//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
if (mention != null || mention != undefined) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    name = mention.username + "' ";//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }
  const avatarEmbedOther = new Discord.MessageEmbed()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setAuthor(mention.username, mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setImage(mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(avatarEmbedOther);
  return;//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
} else {
  const avatarEmbedYou = new Discord.MessageEmbed()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setAuthor(sender,message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(avatarEmbedYou);
  return;
} //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
message.channel.send("Render Hatası Yada Bilinmeyen Bir Hata Oldu.");
} //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['avatarım'],
    kategori: 'kullanıcı',
  permLevel: 0//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'avatar',
  isim: 'Avatar',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  süre: 'Yok',
  description: 'Avatarınızı Gösterir Veya Birini Etiketlerseniz Kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};