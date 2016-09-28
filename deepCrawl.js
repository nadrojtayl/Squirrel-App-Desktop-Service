var axios = require('axios');
var fs = require('fs');
var cheerio = require('cheerio');
function crawl(url) => {
  axios({
  method: 'get',
  url: `url`
  // params: {
  //   userid: id
  // }
  })
  .then((res) => {
    var $ = cheerio.load(res.data);
    var links = $('a')
    links = links.filter(function(link){
    	return link.attr('href').length > 2;
    })
    var title = $('title').text(); //.replace(/[\s|]/g, '');
    var path = `Stash/Me/Mine/${title}`
    fs.mkDir(path,function(err){
    	if(err){console.log(err)}
    })
    var path = `Stash/Me/Mine/${title}/main.html`;
	 fs.writeFile(path, res.data, (err) => {
	    if (err) {
	      console.log('Err, yo', err);
	    }
	  })
	 ar path = `Stash/Me/Mine/${title}/`;
	 links.each(function(ind,link){
	 	axios({
		  method: 'get',
		  url: link
		  // params: {
		  //   userid: id
		  // }
		})
	 })
  })
  .then(()=>{

  })
  .catch((err) => {
    console.log(err);
  });
};





// function get(link, username) {

//    var user = username;

//   return axios ({
//     method: 'get',
//     url: link
//   });
// };
