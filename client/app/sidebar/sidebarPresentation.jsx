import React from 'react';
import FolderContainer from './folder/folderContainer.jsx';

var SidebarPresentation = (props) => {
     console.log('in SidebarPresentation', props.loadFolder); 

  var folders = props.folders.map((folder, index) => {
    return (<li key={index}><FolderContainer folder={folder} loadFolder={props.loadFolder}/></li>)
  });

  return (
    <ul>
      {folders}
    </ul>
  )
};

export default SidebarPresentation;