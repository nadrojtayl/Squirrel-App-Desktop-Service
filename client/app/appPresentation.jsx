import React from 'react';
import {render} from 'react-dom'
import SidebarContainer from './sidebar/sidebarContainer.jsx';
import ArticleLibraryContainer from './articleLibrary/articleLibraryContainer.jsx'

var AppPresentation = (props) => {

  return (
    <div>
      <SidebarContainer folders={props.folders} loadFolder={props.loadFolder}/>
      <ArticleLibraryContainer folderPath={props.folderPath}/>
    </div>
  );
}

export default AppPresentation;