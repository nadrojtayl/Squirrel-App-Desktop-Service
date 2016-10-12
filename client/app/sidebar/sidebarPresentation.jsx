import React from 'react';
import FolderContainer from './folder/folderContainer.jsx';

var SidebarPresentation = (props) => {

  var folders = props.folders.map((folder, index) => {
    if (index < 2) {
      return (
        <div className="newfolder">
          <FolderContainer folder={folder} loadFolder={props.loadFolder} index={index}/>
        </div>
      );
    }
  });


  return (
    <div className="z-depth-3" style={{zIndex: '1', width: '255px', height: '100%', position: 'relative', backgroundColor: '#9e9e9e'}}>
      <h5 className="collection" style={{fontFamily: '"Roboto", sans-serif', fontSize: '1.64rem', lineHeight: '110%', margin: '0.82rem 0 0.656rem 0', color: '#9e9e9e', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', paddingTop: '15px'}}>collections</h5>
      {folders}
      <h6 className="squirreltitle">Squirrel</h6>
    </div>
  );
};

export default SidebarPresentation;