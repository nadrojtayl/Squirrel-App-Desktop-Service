import React from 'react';
import ArticleLibraryPresentation from './articleLibraryPresentation.jsx';
import fs from 'fs';

var ArticleLibraryContainer = ({folderPath}) => {

  var filePaths = [];
  console.log('YO')
  if(folderPath && folderPath.indexOf('Recommended')!==-1){
    fs.readdirSync(folderPath).forEach(function(sub){
      fs.readdirSync(folderPath + '/' + sub).forEach(function(file){
        var filePath = folderPath + '/' + sub + '/' + file;
        filePaths.push(filePath);
      })
    })
  }
  console.log('HERE');
  if (folderPath) {
    fs.readdirSync(folderPath).forEach((fileName) => {
      var filePath = `${folderPath}/${fileName}`;
      filePaths.push(filePath);
    });
  }

 return (
    <ArticleLibraryPresentation filePaths={filePaths.filter(function(path){return path.indexOf('.DS') === -1})}/>
  );
}

export default ArticleLibraryContainer;