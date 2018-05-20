var webshot = require('webshot');
var fs      = require('fs');

var options = {
    cookies:[
        {
            'domain':'downdetector.jp',
            'httponly': false,
            'name':'displayCookieConsent',
            'path':'/shougai',
            'secure': false,
            'value':'y'
        }
    ],
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    + ' (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
};
 
var renderStream = webshot('http://downdetector.jp/shougai/aws-amazon-web-services', options);
var file = fs.createWriteStream('pubg.png', {encoding: 'binary'});

renderStream.on('data', function(data) {
    file.write(data.toString('binary'), 'binary');
});