import React from 'react';
import FileCard from './fileCard/fileCardContainer.jsx';


var ArticleLibraryPresentation = ({filePaths}) => {

  var fileCards = filePaths.map((filePath, i) => {
    return (<li key={i}><FileCard path={filePath}/></li>)
  });

  return (
    <div style = {{display:'inline'}}>
      {fileCards}
    </div>
  );
};

export default ArticleLibraryPresentation;