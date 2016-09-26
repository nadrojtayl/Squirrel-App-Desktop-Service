import React from 'react';
import SidebarPresentation from './sidebarPresentation.jsx';

var SidebarContainer = (props) => {
console.log('in SidebarContainer', props.loadFolder);
  return (<SidebarPresentation folders={props.folders} loadFolder={props.loadFolder}/>
)
}
export default SidebarContainer;