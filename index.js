var electron = require('electron');
var fetch = require('./src/fetch.js');
var listener = require('./src/listener.js');

fetch.call();

var BrowserWindow = electron.BrowserWindow;

var app = electron.app;

app.on('ready', function(){
  
  var win = new BrowserWindow({});

  win.maximize();

  win.loadURL(`file://${__dirname}/Acorns/test.html`);
  
});



