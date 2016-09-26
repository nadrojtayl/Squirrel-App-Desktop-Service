require('../../scss/main.scss');

import React from 'react';
import {render} from 'react-dom'
import fs from 'fs';
import path from 'path';
import AppPresentation from './appPresentation.jsx';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  loadFolder() {
    console.log('You loaded a folder!')
  }

  render() {
    return (
      <div className="app-container">
        <AppPresentation folders={this.props.folders} loadFolder={this.loadFolder}/>
      </div>
    )
  }
};

  var srcpath = `${__dirname}/../Stash/Jordan/`;
var getFolders = function() {
  // return fs.readdirSync(srcpath).filter(function(file) {
  //   return fs.statSync(path.join(srcpath, file)).isDirectory();
  // });
}

render(<AppContainer folders={[srcpath]}/>, document.getElementById('app'));