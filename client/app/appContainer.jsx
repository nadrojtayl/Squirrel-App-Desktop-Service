require('../../scss/main.scss');
// var remote = require('electron').remote;
// var fs = remote.require('fs');
console.log('MADE IT HERE');



import React from 'react';
import {render} from 'react-dom'
import path from 'path';
// import fs from 'fs';
import AppPresentation from './appPresentation.jsx';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentFolder: null};
  }

  loadFolder(folderPath) {
    this.setState({currentFolder: folderPath});
  }

  render() {
    return (
      <div className="app-container">
        <AppPresentation folders={this.props.folders} loadFolder={this.loadFolder.bind(this)} folderPath={this.state.currentFolder}/>
      </div>
    )
  }
};

var getFolders = function() {
  var dirs = fs.readdirSync(__dirname + '/Stash').filter((dir) => {
    if (dir === '.DS_Store' || dir === 'Me') {
      return false;
    } else {
      return true;
    }
  });
  console.log('DIRS',dirs);
  dirs = dirs.map((dir) => {
    return __dirname + '/Stash/' + dir;
  });

  dirs.push(__dirname + '/Stash/Me/Mine');
  fs.readdirSync(__dirname + '/Stash/Me/Recommended').forEach(function(path){
    dirs.push(__dirname + '/Stash/Me/Recommended/' + path)
  })
  dirs.push(__dirname + '/Stash/Me/Recommended');

  return dirs;
};

render(<AppContainer folders={getFolders()}/>, document.getElementById('app'));