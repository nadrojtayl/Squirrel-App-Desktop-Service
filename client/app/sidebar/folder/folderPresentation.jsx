import React from 'react';

var FolderPresentation = (props) => (
  <div>
    <img width="30%" src="client/assets/Folder-icon.png"/>
    <p>{props.folder.replace('Stash/',"")}</p> 
  </div>
);

export default FolderPresentation;
