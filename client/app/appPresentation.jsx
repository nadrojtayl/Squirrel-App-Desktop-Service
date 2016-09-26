import React from 'react';
import {render} from 'react-dom'
import SidebarContainer from './sidebar/sidebarContainer.jsx';

var AppPresentation = (props) => {
   console.log('in AppPresentation', props.loadFolder);
   return (<SidebarContainer folders={props.folders} loadFolder={props.loadFolder}/>
);
}

export default AppPresentation;