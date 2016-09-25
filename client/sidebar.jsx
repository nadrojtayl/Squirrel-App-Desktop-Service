import React from 'react';
import Folder from './folder.jsx'

var Sidebar = (props) => {

  var folders = props.folders.map((folder) => (
    <li className="folder"><Folder folder={folder} loadFolder={props.loadFolder}/></li>
  ));

  return (
    <div className="sidebar">
      <ul>
      {folders}
      </ul>
    </div>
  )

};

export default Sidebar;