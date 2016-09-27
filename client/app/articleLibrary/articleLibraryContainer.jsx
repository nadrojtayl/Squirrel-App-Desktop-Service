import React from 'react';
import ArticleLibraryPresentation from './articleLibraryPresentation.jsx';
import fs from 'fs';

var ArticleLibraryContainer = ({folderPath}) => {

  var filePaths = [];


  if (folderPath) {
    fs.readdirSync(folderPath).forEach((fileName) => {
      var filePath = `${folderPath}/${fileName}`;
      filePaths.push(filePath);
    });
  }

  console.log(filePaths);

 return (
    <ArticleLibraryPresentation filePaths={filePaths}/>
  );
}

export default ArticleLibraryContainer;