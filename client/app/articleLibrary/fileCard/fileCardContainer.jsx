import React from 'react';



class FileCardContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  findsecondslash(string) {
    var foundone = 0;
    var indextoreturn;
    string.split('').forEach(function(char,index) {
      if(char === "/"){
        if (foundone === 0){
          foundone = 1;
        } else {
          indextoreturn = index;
        }
      }
    });

    return indextoreturn + 1;
  }

  expand(url) {
    console.log(url);                    
    //const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600 });
    console.log('NEW howdy')
    console.log('topleveldir',topleveldir)
    console.log('total','file://' + url + '/article.html')
    var toload = 'file://' + url + '/article.html';

    win.loadURL(toload);
    win.webContents.openDevTools()
  }

  render() {
    var image = fs.readdirSync(this.props.path)[10];
    return (
      <div className = "articleBox" onClick={() => this.expand.bind(this)(this.props.path)} draggable="true" onDragStart={function(event){drag(event)}}>
        <img className="articleImage" src={image}/>
        <div className="articleTitle">
          <h3> {this.props.path.slice(findsecondslash(this.props.path).bind(this)).replace('.html', '')}</h3>
        </div>
      </div>
    );
  }
};

export default FileCardContainer;