import React from 'react';

var FileCardContainer = ({path}) => {

  console.log(path);

  return (
    <a href={path}><iframe src={path.replace('/public', '')}></iframe></a> 
  );
};

export default FileCardContainer;