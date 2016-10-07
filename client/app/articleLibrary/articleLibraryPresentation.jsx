import React from 'react';
import FileCard from './fileCard/fileCardContainer.jsx';


var ArticleLibraryPresentation = ({filePaths}) => {

  var fileCards = filePaths.map((filePath, i) => {
    return (<FileCard path={filePath}/>)
  });

  return (
    <div className = "z-depth-3 easyui-panel articleContainer" style={{width:'100%',height:'100%',position:'relative', backgroundColor: '#f5f5f5'}}>
      {fileCards}
    </div>
  );
};

export default ArticleLibraryPresentation;