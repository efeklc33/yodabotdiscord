const Discord = require("discord.js");//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!message.member.hasPermission("BAN_MEMBERS")) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    const embed = new Discord.MessageEmbed()
      .setDescription(":x: ``Bu komutu kullanabilmek için Üyeleri Yasakla yetkisine sahip olmalısın!``")
      .setColor("BLACK");
 
    message.channel.send(embed);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    return;
  }
 //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let u = message.mentions.users.first();//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        .setDescription(" Lütfen banlanacak kişiyi etiketleyiniz!")//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }
 //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.channel.send(
          `:ok_hand:  İşlem onaylandı! şahıs sunucudan banlandı!`
        );
 //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.guild.member(u).ban();
      }//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
   
  
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
module.exports.conf = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],
  permLevel: 0,
  enabled: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: "moderasyon"//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
module.exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: "ban",//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: "kick",//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: "ban"//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};