import React from 'react'
import FolderPresentation from './folderPresentation.jsx'

var FolderContainer = (props) => {
   console.log('in FolderContainer', props.loadFolder); 

  return (<div onClick={props.loadFolder}>
    <FolderPresentation folder={props.folder}/>
  </div>
)
}

export default FolderContainer;