const Discord = require("discord.js"); // Подключаем модуль D.JS: Установка Node.JS
const bot = new Discord.Client(); // Создаем нового клиента
let config = require("./botconfig.json") // Подключаем файл с настройкой бота
let token = config.token // Ищем в файле botconfig.json токен
let prefix = config.prefix // Ищем в файле botconfig.json префикс
// Делаем после запуска:
bot.on('ready', () => {
  console.log(`Запустился бот ${bot.user.tag}!`);
});
// Что делаем если пользователь отправил сообщение:
bot.on('message', message => {
  if (message.content === '${prefix}ping') {
    message.reply('Pong!');
  }
});

bot.login(token); // Авторизовываем бота