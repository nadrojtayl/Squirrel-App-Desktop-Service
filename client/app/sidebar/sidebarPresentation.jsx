import React from 'react';
import FolderContainer from './folder/folderContainer.jsx';

var SidebarPresentation = (props) => {

  var folders = props.folders.map((folder, index) => {
    if (index < 2) {
      return (
        <div className="">
          <img style={{marginLeft: '210', width:'15%', position:'relative', bottom:'-10px'}} className="acornLogo" src={`${__dirname}/client/assets/acorn-7-xxl.png`}/>
          <FolderContainer folder={folder} loadFolder={props.loadFolder} index={index}/>
        </div>
      );
    }
  });


  return (
    <div className="z-depth-3" style={{zIndex: '1', width: '255px', height: '100%', position: 'relative', backgroundColor: '#e0e0e0'}}>
      <h5>Your collection:</h5>
      {folders}
    </div>
  );
};

export default SidebarPresentation;
