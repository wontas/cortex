const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Line Cortex Para Hilesi");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});


client.on("guildCreate", linecortex => {
  sleep(1000);
  if (
    linecortex.id === "ID" ||  // sunucunun idsi
    linecortex.id === "ID"  // sunucunun idsi
  ) {
    
  } else {
    linecortex.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("ID") // sunucunun kanal id'si


       a.send("!!bahis 149999")


      }, 4000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("ID") // sunucunun kanal id'si


       a.send("!!bahis 149998")


      }, 9000);
})


client.login("Token") // user tokeniniz
