import React from 'react'
import FolderPresentation from './folderPresentation.jsx'

var FolderContainer = (props) => (

  <div onClick={() => (props.loadFolder(props.folder))}>
    <FolderPresentation folder={props.folder}/>
  </div>
)

export default FolderContainer;