var electron = require('electron');
var fs = require('fs');
var files = fs.readdirSync(__dirname);
//console.log(files.indexOf('fbkeys.js'));
var authserver = require('./authserver.js');
//console.log('DIRNAME',fs.readdirSync(__dirname))
console.log(files.indexOf('fbkeys.js'));
// require('electron-cookies');

if (files.indexOf('fbkeys.js') !== -1) {
  var listener = require('./src/listener.js');
  var fetch = require('./src/fetch.js');
  fetch.call();
}


var BrowserWindow = electron.BrowserWindow;

var app = electron.app;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

  console.log(`file://${__dirname}/dragtest.html`);
app.on('ready', function(){
   global.login= new BrowserWindow({width: 1360, title:'Your stash',height: 800, "node-integration": "iframe", // and this line
    "web-preferences": {
      "web-security": false
    }});
  // var win = new BrowserWindow({width: 1360, title:'Your stash',height: 800, "node-integration": "iframe", // and this line
  //   "web-preferences": {
  //     "web-security": false
  //   }});

  console.log(`file://${__dirname}/index.html`)
  //win.loadURL(`file://${__dirname}/index.html`);
  global.login.loadURL(`http://localhost:3030`);
});



