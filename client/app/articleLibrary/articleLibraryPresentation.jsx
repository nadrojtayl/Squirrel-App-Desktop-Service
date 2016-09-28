import React from 'react';
import FileCard from './fileCard/fileCardContainer.jsx';


var ArticleLibraryPresentation = ({filePaths}) => {

  var fileCards = filePaths.map((filePath, i) => {
    return (<FileCard path={filePath}/>)
  });

  return (
    <div className = "easyui-panel" style={{width:'500px',height:'600px',position:'relative'}}>
      {fileCards}
    </div>
  );
};

export default ArticleLibraryPresentation;