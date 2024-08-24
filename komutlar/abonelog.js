let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonelog #kanal`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  database.set(`abonelog.${message.guild.id}`, log.id)//Yoda Code , Telif Hakları//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5 Vardır, https://discord.gg/mMMpTt5
  message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['abone-log'],//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {
  name: 'abonelog'
}
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5