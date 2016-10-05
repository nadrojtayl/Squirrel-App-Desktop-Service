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
  var dirs = fs.readdirSync(__dirname + '/Stash');
  console.log('DIRS',dirs);
  dirs = dirs.map((dir) => {
    return __dirname + '/Stash/' + dir;
  });

  dirs = dirs.filter((dir) => {
    if (/[\S\s]*\/Me$/.test(dir)) {
      return false;
    } else {
      return true;
    }
  });

  dirs.push(__dirname + '/Stash/Me/Mine');
  fs.readdirSync(__dirname + '/Stash/Me/Recommended').forEach(function(path){
    dirs.push(__dirname + '/Stash/Me/Recommended/' + path)
  })
  dirs.push(__dirname + '/Stash/Me/Recommended');

  dirs = dirs.filter((dir) => {
    if (/\.DS_Store/.test(dir)) {
      return false;
    } else {
      return true;
    }
  })

  return dirs;
};

render(<AppContainer folders={getFolders()}/>, document.getElementById('app'));