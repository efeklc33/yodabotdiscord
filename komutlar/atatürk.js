const Discord = require('discord.js');//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
         //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
      //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);
    } //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5