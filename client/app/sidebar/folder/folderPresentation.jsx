import React from 'react';

var FolderPresentation = (props) => (
  <div>
    <img width="10%" src="client/assets/Folder-icon.png"/>
    <p>{props.folder}</p> 
  </div>
);

export default FolderPresentation;
