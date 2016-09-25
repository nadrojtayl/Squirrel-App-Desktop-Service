import React from 'react';
import RenderDom from 'react-dom';
import fs from 'fs';
import path from 'path';
import Sidebar from './sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  loadFolder() {
    console.log('You loaded a folder!')
  }

  render() {
    return
      (
        <Sidebar folders={props.folders} loadFolder={this.loadFolder.bind(this)}/>
    );
  }
};

var getFolders = function() {

  var srcpath = `${__dirname}/../Acorns`;
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

RenderDom.render(<App folders={getFolders()}/>, document.getElementById('app'));