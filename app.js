
// discord.js モジュールのインポート
const Discord = require('discord.js');
const config = require(__dirname + '/config.json');

// Discord Clientのインスタンス作成
const client = new Discord.Client();

// トークンの用意
const token = config.app.token;

// メッセージがあったら何かをする
client.on('message', function(msg){
    msg.content = msg.content.toUpperCase();
    // メッセージの文字列による条件分岐
    if (msg.content === 'PUBG') {

        let reply_text = `ワイトもそう思います。`;

        msg.reply(reply_text);
    }
});


// Discordへの接続
client.login(token);