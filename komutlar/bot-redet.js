const Discord = require('discord.js');//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = function(client, message, args) {
  //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!message.member.roles.cache.has("792010324781563915"))  return message.channel.send(`:x: Bu komutu kullanabilmek için "\`BotList Yetkili\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sahip = args[1]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep = args[2]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep1 = args[3]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep2 = args[4]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep3 = args[5]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep4 = args[6]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep5 = args[7]//Yoda Code //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5, Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep6 = args[8]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep7 = args[9]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep8 = args[10]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep9 = args[11]//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
	let log = "774208316791455775" // Bot Eklendi / Onaylandı / Rededildi Kanalı
	//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
	if (!botisim) return message.channel.send(`:x: Botun idsini yazmalısın.`).then(x => x.delete({timeout: 3000}))//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!sebep) return message.channel.send(`:x: Botu neden onaylamadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    if (!sahip) return message.channel.send(`:x: Bot Sahibi id yazman lazım.`).then(x => x.delete({timeout: 3000}))
  message.delete()//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
		client.channels.cache.get(log).send(`:x: <@${sahip}> adlı kişini <@${botisim}> adlı botu reddedildi. Sebep : ${sebep}  Reddeden yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu reddettiniz.`).then(x => x.delete({timeout: 3000}))
};
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['bot-reddet', 'reddet'],//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 3//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'botreddet', //Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Yoda Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5