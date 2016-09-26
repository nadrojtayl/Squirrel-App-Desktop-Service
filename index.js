var electron = require('electron');
var fetch = require('./src/fetch.js');
var listener = require('./src/listener.js');

fetch.call();

var BrowserWindow = electron.BrowserWindow;

var app = electron.app;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function(){
  
  var win = new BrowserWindow({width: 1360, height: 800});

  win.loadURL(`file://${__dirname}/public/index.html`);
  
});



