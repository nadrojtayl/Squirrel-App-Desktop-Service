import React from 'react';
import FolderContainer from './folder/folderContainer.jsx';

var SidebarPresentation = (props) => {

  var folders = props.folders.map((folder, index) => {
    return (<FolderContainer folder={folder} loadFolder={props.loadFolder}/>)
  });

  return (

  <div className = "easyui-panel" style={{width:'500px',height:'600px',position:'relative'}}>
    
    {folders}	


 </div>


  )
};

export default SidebarPresentation;