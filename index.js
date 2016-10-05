var electron = require('electron');
var fs = require('fs');
var files = fs.readdirSync(__dirname);
var authserver = require('./authserver.js');
console.log(files.indexOf('fbkeys.js'));
var BrowserWindow = electron.BrowserWindow;

var app = electron.app;
// global.app = app;
// global.window = BrowserWindow;

if (files.indexOf('fbkeys.js') !== -1) {
  console.log('HERE FETCHING');
  var listener = require('./src/listener.js');
  var fetch = require('./src/fetch.js');
  fetch.call();
}



app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function(){
   global.login= new BrowserWindow({
    width: 1360, 
    title:'Your stash',
    height: 800, 
    "node-integration": "iframe", // and this line
    "web-preferences": {
      "web-security": false
      }
    });

  global.login.loadURL(`http://localhost:3030`);
  global.login.webContents.openDevTools();
});



