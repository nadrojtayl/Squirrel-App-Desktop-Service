import React from 'react';
import FileCard from './fileCard/fileCardContainer.jsx';


var ArticleLibraryPresentation = ({filePaths}) => {

  var fileCards = filePaths.map((filePath, i) => {
    return (<FileCard path={filePath}/>)
  });

  return (
    <div className = "z-depth-3 easyui-panel articleContainer" style={{display: 'flex', 'flex-wrap': 'wrap', width:'100%',height:'100%',position:'relative', backgroundColor: 'white'}}>
      {fileCards}
    </div>
  );
};

export default ArticleLibraryPresentation;