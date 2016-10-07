import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import Login from './Login/Login.jsx';
import App from './App.jsx';
import Main from './appContainer.jsx'
import Login2 from './Login/loginContainer.jsx';

function validate(nextState, replace) {
  if(fs.readdirSync(__dirname).indexOf('fbkeys.js') !== -1){
    replace('/home');
  }
}

const router = (
    <Route path='/' component={App}>
      <IndexRoute component={Login} onEnter={validate}/>
      <Route path='/home' component={Main}/>
    </Route>
  )

export default router;