/*
* 特定の呪文に反応するサンプルコード
*/

// discord.js モジュールのインポート
const Discord = require('discord.js');

// Discord Clientのインスタンス作成
const client = new Discord.Client();

// トークンの用意
const token = 'NDQ2Mjk3MDMzMTMzNzg1MDkx.Dd2-Fg.jA3ovUOZsVrIlnXaKAud5SMc-T8';

// 準備完了イベントのconsole.logで通知黒い画面に出る。
client.on('ready', () => {
    console.log('ready...');
});


// メッセージがあったら何かをする
client.on('message', msg => {
    // メッセージの文字列による条件分岐
    if (msg.content === 'さっ') {

        let reply_text = `ワイトもそう思います。`;

        msg.reply(reply_text);
        // そのチェンネルにメッセージを送信する
        // channel.reply(reply_text)
        //     .then(message => console.log(`Sent message: ${reply_text}`))
        //     .catch(console.error);
        // return;
    }
});


// Discordへの接続
client.login(token);