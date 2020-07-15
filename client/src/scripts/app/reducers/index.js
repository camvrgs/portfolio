/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  reducers/.
 *  index.js
 *
 *  combines and exports all redux reducers for the app into a rootreducer
 *  to initialize the redux store
 *  https://redux.js.org/basics/reducers
 *
 *  ~ Cameron Vargas ~
 **/

import { combineReducers } from 'redux'

// * * Import reducers here * * //
import clickCounterReducer from './clickCounter'
import pageUpdaterReducer from './pageUpdater'
import modalUpdaterReducer from './modalUpdater'
// * * End import * * //

const rootReducer = combineReducers({
  // store_variable: importedReducer,
  clicks: clickCounterReducer,
  modal: modalUpdaterReducer,
  page: pageUpdaterReducer
})

export default rootReducer
