import React from 'react';

var FolderPresentation = (props) => (
   <div  className="easyui-draggable" style={{width:'100px',height:'100px'}} data-options="onDrag:onDrag" onClick={() => (props.loadFolder(props.folder))}>
    <img width="30%" src="client/assets/Folder-icon.png" onDrop={function(event){drop(event)}} onDragOver={function(event){allowDrop(event)}}/>
    <p width="30%">{props.folder.replace('Stash/',"")}</p> 
  </div>
);

export default FolderPresentation;
