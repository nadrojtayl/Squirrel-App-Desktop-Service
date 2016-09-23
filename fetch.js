var axios = require('axios');
var fs = require('fs');
var cheerio = require('cheerio');

var id = 1;

axios({
  method: 'get',
  url: `http://localhost:4000/links/${id}`
  // params: {
  //   userid: id
  // }
})
.then((res) => {
  linkObject = res.data;
  ownLinks = res.data.ownLinks
  for (key in ownLinks) {
    var userid = key.split('%')[0];
    var username = key.split('%')[1];
    for (var i = 0; i < ownLinks[key].length; i++) {
      var url = ownLinks[key][i];
      get(url)
      .then((res) => {
        var $ = cheerio.load(res.data);
        var title = $('title').text() //.replace(/[\s|]/g, '');
        // console.log(title);
        if (userid === id) {
          var path = `Acorns/Me/Mine/${title}.html`;
        } else {
          var dir = `Acorns/${username}/`;
          var path = `${dir}/${title}.html`;  
          if (!fs.existsSync()) {
            fs.mkdirSync(dir)           
          }
        }
        fs.write(res.data);

        console.log('Hey');
        fs.writeFile(path, res.data, (err) => {
          if (err) {
            console.log('Err, yo', err);
          }
        });
      });
    }
  }

})
.catch((err) => {
  console.log(err);
});

function get(link) {
  return axios({
    method: 'get',
    url: link
  });
};
