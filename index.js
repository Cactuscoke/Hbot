const botconfig = require("./botconfig.json");
const Discord = require('discord.js')

const client = new Discord.Client()
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready",async () => {
console.log(`${bot.user.username}is online`);
bot.user.setActivity(" ROCKET DICK ");
});

bot.on("message", async message =>{

if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = botconfig.prefix
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

switch (cmd.toLowerCase()) {
  case "!hi" :
    message.channel.send("Haro 🍆"+message.author,{files:["./images/tenor.gif"]});
    break;

    case "!hello" :
      message.channel.send('i guess they never missed huh!',{files:["./images/riccardo2.gif"]});
      break;

  case "!prick" :
    message.channel.send('Cunt king detected'+message.author,{files:["./images/bird.gif"]});
    break;

    case "!help" :
var com = new Array(5);
com[0]="!hi";
com[1]="!hello";
com[2]="!prick";
com[3]="!time";
com[4]="!help";
message.channel.send("Harris Bot 101");
message.channel.send(com.toString());
      break;

case "!time" :
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var weekday = new Array(7);
 weekday[0] = "Sunday";
 weekday[1] = "Monday";
 weekday[2] = "Tuesday";
 weekday[3] = "Wednesday";
 weekday[4] = "Thursday";
 weekday[5] = "Friday";
 weekday[6] = "Saturday";
 var d = weekday[date.getDay()];
var day = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
var n = day.toString();

if(hour>=12){
  message.channel.send(d+" "+hour+":"+min+" "+ "PM");
message.channel.send(n);
}

else{
  message.channel.send(d+" "+hour+":"+min+" "+ "PM");
  message.channel.send(n);
}
break;


}





});




bot.login(botconfig.token);
