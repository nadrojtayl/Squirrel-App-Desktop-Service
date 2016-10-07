import React from 'react';
import FolderContainer from './folder/folderContainer.jsx';

var SidebarPresentation = (props) => {

  var folders = props.folders.map((folder, index) => {
    if (index < 2) {
      return (
        <div className="">
          <img className="acornLogo" src={`${__dirname}/client/assets/acorn-7-xxl.png`}/>
          <FolderContainer folder={folder} loadFolder={props.loadFolder} index={index}/>
        </div>
      );
    }
  });

  return (
    <div className="" style={{width: '500px', height: '600px', position: 'relative'}}>
      <h4>Your collection:</h4>
      {folders}
    </div>
  );
};

export default SidebarPresentation;