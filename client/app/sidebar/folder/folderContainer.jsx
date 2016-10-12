import React from 'react'

const FolderContainer = (props) => {

  const title = props.index === 0 ? 'My Stash' : 'From Friends';

	var regex = /[\S\s]*\/([\S\s]*)$/;

  return (
    <div  className="easyui-draggable folder" data-options="onDrag:onDrag" onClick={() => (props.loadFolder(props.folder))}>
  	  <p style={{fontSize: '1.1rem'}}onDrop={function(event){ drop(event); }} onDragOver={function(event) { allowDrop(event); }}> {title} </p>
    </div>
  );
};

export default FolderContainer;

// <p width="30%">{regex.exec(props.folder)[1]}</p> 