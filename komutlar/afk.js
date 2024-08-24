const db = require("quick.db");
const Discord = require("discord.js");//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const ayarlar = require('../ayarlar.json')//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
let prefix = ayarlar.prefix//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
exports.run = function(client, message, args) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

  if (talkedRecently.has(message.author.id)) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {

         //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
        

          talkedRecently.delete(message.author.id);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        }, 3000);
    } 

  var USER = message.author;//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!REASON) return message.channel.send(embed)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set(`afk_${USER.id}`, REASON);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set(`afk_süre_${USER.id}`, Date.now());//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const afk = new Discord.MessageEmbed()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setDescription(`Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(afk)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Yoda Code , Telif Hakla//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5rı Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 0//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
 //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'afk',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: 'afk komutu',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: 'afk'//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};