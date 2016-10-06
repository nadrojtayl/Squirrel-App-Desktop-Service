import React from 'react'

const FolderContainer = (props) => {

  const title = props.index === 0 ? 'your saved stash' : 'with love from friends';

	var regex = /[\S\s]*\/([\S\s]*)$/;

  return (
    <div  className="easyui-draggable folder" data-options="onDrag:onDrag" onClick={() => (props.loadFolder(props.folder))}>
  	  <h4 onDrop={function(event){ drop(event); }} onDragOver={function(event) { allowDrop(event); }}> {title} </h4>
    </div>
  );
};

export default FolderContainer;

// <p width="30%">{regex.exec(props.folder)[1]}</p> 