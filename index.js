var electron = require('electron');
var axios = require('axios');

var browserWindow = electron.browserWindow;

var app = electron.app;

var id = '1';

axios({
  method: 'get',
  url: `http://localhost:4000/links/${id}`,
  // params: {
  //   userid: id
  // }
})
.then(function(res) {
  console.log(res.data);
})
.catch(function(err) {
  console.log(err);
});

