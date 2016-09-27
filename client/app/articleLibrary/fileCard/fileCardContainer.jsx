import React from 'react';

class FileCardContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  expand(url) {
    console.log('expanding');                    
    //const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    console.log('NEW')
    win.loadURL('https://www.nytimes.com');
                        
  }

  render() {
    return (
      <button onClick={this.expand.bind(this)}></button>
    );
  }
};

export default FileCardContainer;