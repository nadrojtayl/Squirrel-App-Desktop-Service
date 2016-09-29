var electron = require('electron');
var fetch = require('./src/fetch.js');
var listener = require('./src/listener.js');
var authserver = require('./authserver.js')

fetch.call();

var BrowserWindow = electron.BrowserWindow;

var app = electron.app;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

  console.log(`file://${__dirname}/dragtest.html`);
app.on('ready', function(){
   var login= new BrowserWindow({width: 1360, title:'Your stash',height: 800, "node-integration": "iframe", // and this line
    "web-preferences": {
      "web-security": false
    }});
  var win = new BrowserWindow({width: 1360, title:'Your stash',height: 800, "node-integration": "iframe", // and this line
    "web-preferences": {
      "web-security": false
    }});

  console.log(`file://${__dirname}/index.html`)
  win.loadURL(`file://${__dirname}/index.html`);
  login.loadURL(`http://localhost:3030`);
});



