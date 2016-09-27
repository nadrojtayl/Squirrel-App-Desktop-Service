import React from 'react';

class FileCardContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  expand(url) {
    // window.open(url);
  }

  render() {
    return (
      <iframe src={this.props.path.replace('/public', '')} onClick={this.expand.bind(this, this.props.path)}></iframe>
    );
  }
};

export default FileCardContainer;