import React from 'react'
import { render } from 'react-dom'
import routes from './router.jsx'
import { Router, hashHistory } from 'react-router'


render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));