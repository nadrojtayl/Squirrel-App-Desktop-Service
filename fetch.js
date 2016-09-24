var axios = require('axios');
var fs = require('fs');
var cheerio = require('cheerio');

var id = '1';

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
  recommendedLinks = res.data.recommendedLinks;
  for (key in ownLinks) {
    var userid = key.split('%')[0];
    var username = key.split('%')[1];
    getLinks(username, userid, ownLinks, key, 'Mine');
  }
  for (key in recommendedLinks) {
    var userid = key.split('%')[0];
    var username = key.split('%')[1];
    getLinks(username, userid, recommendedLinks, key, 'Recommended');
  }
})
.catch((err) => {
  console.log(err);
})


function getLinks(username, userid, links, key, type) {
  for (var i = 0; i < links[key].length; i++) {
    var url = links[key][i];
    axios ({
      method: 'get',
      url: url
    })
    .then((res) => {
      var $ = cheerio.load(res.data);
      var title = $('title').text(); //.replace(/[\s|]/g, '');
      // console.log(title);
      if (userid === id) {
        var path = `Acorns/Me/${type}/${title}.html`;
      } else {
        var dir;
        type === 'Mine' ? dir = `Acorns/${username}/` : dir = `Acorns/Me/Recommended/${username}`
        var path = `${dir}/${title}.html`;
        console.log(path);  
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);           
        }
      }
      fs.writeFile(path, res.data, (err) => {
        if (err) {
          console.log('Err, yo', err);
        }
      });
    });
  }
};

// function get(link, username) {

//    var user = username;

//   return axios ({
//     method: 'get',
//     url: link
//   });
// };
