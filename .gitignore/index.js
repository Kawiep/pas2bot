const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Pas2Bot, ^help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDMwODEyODI5MDU5MTIxMTUz.DaY_Mg.2UlL71GLpLNacLLdK-PlmcyxIjo");
