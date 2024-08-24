let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,
  aliases: ['abone-rol'],//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}
exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'abonerol'
}//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.play = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abonerol @rol',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  açıklama: 'Abone Rolünü Ayarlarsınız',//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'
}//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
