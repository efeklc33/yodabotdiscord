const Discord = require('discord.js');
const talkedRecently = new Set();
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);
        setTimeout(() => {
       

          talkedRecently.delete(message.author.id);//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        }, 3000);
    } //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const yazi = args.slice(0).join('+'); 
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :envelope: `)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text=${yazi}`
  .replace(' ', '+')
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Kırmızı Logo Oluşturuldu')
  message.channel.send(embed)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}

exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    name: 'red',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'red <yazı>'
}//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5