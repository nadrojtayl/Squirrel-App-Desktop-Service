import React from 'react';

var FolderPresentation = (props) => (
  <div width="30%">
    <img width="30%" src="client/assets/Folder-icon.png" onDrop={function(event){drop(event)}} onDragOver={function(event){allowDrop(event)}}/>
    <p width="30%">{props.folder.replace('Stash/',"")}</p> 
  </div>
);

export default FolderPresentation;
