let Discord = require("discord.js")//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let database = require("quick.db")//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let ayarlar = require("../ayarlar.json")//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış! Ayarlamak İçin r!abone-rol @Rol`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış! Ayarlamak İçin r!abone-log #kanalismi`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış! Ayarlamak İçin r!abone-y-rol @rol`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  await(abonekisi.roles.remove(abonerol))
  message.channel.send(`Kullanıcıdan abone rolünü başarıyla aldın :white_check_mark: `)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Alındı!`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .addField(`Abone Rolünü Alan Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .addField(`Abone Rolü Alınan   Kişi`, `${user}`, true)
  .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor(`BLUE`)
  .setFooter(`${client.user.username} Abone Sistemi`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.guild.channels.cache.get(abonelog).send(embed)
}
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abonesil'],//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}
exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'asil'
}
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}

