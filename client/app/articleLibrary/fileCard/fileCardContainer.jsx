import React from 'react';

var findsecondslash = function(string){
  var foundone = 0;
  var indextoreturn;
  string.split('').forEach(function(char,index){
    if(char === "/"){
      if(foundone === 0){
        foundone = 1;
      } else {
        indextoreturn = index;
      }
    }

  })
  return indextoreturn+1;
  
}

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
      <div className = "teal">
        <img draggable="true" onDragStart={function(event){drag(event)}} id="hello" style = {{display:'inline'}} className= "Acorns" width="10%" src="client/assets/acorn.png" onClick={()=>{this.expand.bind(this)(this.props.path)}}></img>
        <div style = {{display:'inline'}} className = "vAlign">
          <h5 className = "titles"style = {{display:'inline'}} >{this.props.path.slice(findsecondslash(this.props.path)).replace('.html',"")}</h5>
        </div>
      </div>
    );
  }
};

export default FileCardContainer;