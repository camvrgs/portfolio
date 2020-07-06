/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  index.js
 *
 *  React project entry, renders main React component and
 *  attaches the Redux Store to it
 *
 *  ~ Cameron Vargas ~
 **/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div className='app-app'>
      <App />
    </div>
  </Provider>
  , document.querySelector('.mount')
)
