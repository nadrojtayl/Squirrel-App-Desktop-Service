import React from 'react'

class Folder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div onClick={this.props.loadFolder}>
      <img src=""/> <br />
      <h3>{this.props.folder.name}</h3>
    </div>
  }
}

export default Folder;