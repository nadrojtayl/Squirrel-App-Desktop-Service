var Promise = require('bluebird')
var request = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');
var mkdirp = require('mkdirp');

exports.getPage = function(page, filePath) {
  return new Promise((resolve) => {

    var urlsToFiles = {};

    var assetLinks = [];

    var assetLinksAb = [];

    var baseUrl = /^(http[\S\s]*?\/\/[\S\s]+?)(\/|$)/.exec(page)[1]; 

    var options = {
      uri: page,
      transform: function(htmlString) {
        return cheerio.load(htmlString);
      },
    };

    request(options)
    .then(function($) {
      getAssets($);
      return $;
    })
    .catch(function(err) {
      console.log('err getting assets (or cheerio choked) ', err);
    })

    function getAssets($) {
      var cssLinks = [];
      var cssTags = $('link[rel=stylesheet]')
      cssTags.each(function() {
        cssLinks.push($(this).attr('href'));
      });
      csslinks = cssLinks.filter(function(link) {
        if (/\.css$/.test(link)) {
          return true;
        } else {
          return false;
        }
      });
      var imageLinks = [];
      var imageTags = $('img');
   
      imageTags.each(function() {
        imageLinks.push($(this).attr('src'));
      });

      assetLinks = assetLinks.concat(cssLinks).concat(imageLinks);
      assetLinks = assetLinks.filter((link) => {
        return /(\.[\w]{3})\?*?[\w]*?$/.test(link);
      })
      assetLinksAb = assetLinks.map((link) => {
        return addBase(link)
      });

      filePath += $('title').text() + '/';

      Promise.reduce(assetLinksAb, (_, assetLink, index) => {
        var extension = getExtension(assetLink);
        var outputFile = 'assetFile' + index + extension;
        if (extension === '.css') {
          urlsToFiles[assetLink] = `./css/${outputFile}`;
          var path = filePath + 'css/';
          var options = {
            uri: assetLink,
            simple: false
          };
        } else {
          urlsToFiles[assetLink] = `./images/${outputFile}`;
          path = filePath + 'images/';
          var options = {
            uri: assetLink,
            simple: false,
            encoding: 'binary'
          };
        }
        makeCall(assetLink, path, outputFile, extension, options);
        overwrite($);
      }, null);
    };

    function addBase(link) {
      if (!(/^http/.test(link))) {
        return (baseUrl + link);
      } else {
        return link;
      }
    };

    function getExtension(link) {
      return /(\.[\w]{3})\?*[\w]*?$/.exec(link)[1];
    };

    function makeCall(link, path, fileName, extension, options) {
      return request(options)
      .then((fileString) => {
        mkdirp.sync(path);
        return fileString;
      })
      .then((fileString) => {
        if (extension !== '.css') {
          fs.writeFileSync(path + fileName, fileString, 'binary')
        } else {
          fs.writeFileSync(path + fileName, fileString);
        }
      })
      .catch((err) => {
        console.log('Error')
      });
    };

    function overwrite($) {
      for (var i = 0; i < assetLinks.length; i++) {
        assetLink = assetLinks[i];
        $('link[rel=stylesheet]').each(function() {
          if ($(this).attr('href') === assetLink) {
            $(this).attr('href', urlsToFiles[assetLinksAb[i]]);
          }
        });
        $('img').each(function() {
          if ($(this).attr('src') === assetLink) {
            $(this).attr('src', urlsToFiles[assetLinksAb[i]]);
          }
        });
      }
      mkdirp.sync(filePath);
      resolve(fs.writeFileSync(filePath + 'article.html', $.html()));
    };

  });
};