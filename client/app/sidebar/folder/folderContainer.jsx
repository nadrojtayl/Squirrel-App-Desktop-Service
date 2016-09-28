import React from 'react'
import FolderPresentation from './folderPresentation.jsx'

var FolderContainer = (props) => (

  <div width="30%" className="easyui-draggable" data-options="onDrag:onDrag" onClick={() => (props.loadFolder(props.folder))}>
    <FolderPresentation folder={props.folder}/>
  </div>
)

export default FolderContainer;