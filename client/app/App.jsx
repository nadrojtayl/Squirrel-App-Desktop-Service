import React, { PropTypes } from 'react'

const App = (props) => {
  return(
    <div style={{height: '100%'}}>
      {props.children}
    </div>
    )
}

export default App;