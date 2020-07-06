/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  store.js
 *
 *  generates a Redux store in a seperate file to be passed down to whichever
 *  containers need it
 *  also makes integration testing easier if using live Redux stores
 *
 *  ~ Cameron Vargas ~
 **/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export default store
