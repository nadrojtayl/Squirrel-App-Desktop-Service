import React from 'react';
import {render} from 'react-dom';
import SidebarContainer from './sidebar/sidebarContainer.jsx';
import ArticleLibraryContainer from './articleLibrary/articleLibraryContainer.jsx';

const AppPresentation = (props) => {

  return (
    <div style={{height: '100%'}} className=''>
  	  <div style={{display: 'flex', height: '100%'}} className=''>
        <SidebarContainer className='' folders={props.folders} loadFolder={props.loadFolder}/>
        <ArticleLibraryContainer className ='' folderPath={props.folderPath}/>
  	  </div>
    </div>
  );
};

export default AppPresentation;