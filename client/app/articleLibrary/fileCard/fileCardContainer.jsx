import React from 'react';

class FileCardContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  expand(url) {
    console.log(url);                    
    //const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    console.log('NEW')
    var toload = 'file://' + topleveldir+ '/' + url;
    console.log(toload);
    win.loadURL(toload);
                        
  }

  render() {
    return (
      <div>
      <img width="10%" src="client/assets/acorn.png"></img>
      <button onClick={()=>{this.expand.bind(this)(this.props.path)}}>{this.props.path}</button>
      </div>
    );
  }
};

export default FileCardContainer;