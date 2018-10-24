const telegram = require('node-telegram-bot-api');
const github   = require('./functions/github.js');

const token = '663831337:AAFXN5_lcYqdaDS4bcjEoF790503ByZtzCk'

const bot = new telegram(token, {polling: true});

bot.on('message', (msg) => {
  github.getStar(msg.text)
    .then(startCount => {
      var text = msg.text + " has " + startCount + " Stars ✮ ✡";
      bot.sendMessage(msg.chat.id, text);
    })
    .catch(err => {
      bot.sendMessage(msg.chat.id, err);
    })
});
