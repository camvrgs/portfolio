/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  reducers/.
 *  pageUpdater.js
 *
 *  reducer for pageUpdater
 *  handles actions (actions/index):
 *    setPage
 *    resetPage
 *
 *  using actionTypes (actions/types):
 *    SET_PAGE
 *    RESET_PAGE
 *
 *  https://redux.js.org/basics/reducers
 *
 *  ~ Cameron Vargas ~
 **/

import * as actionType from '../actions/types'

const initialState = {
  pageProps: {
    active: true
  },
  pageID: 'home'
}

export default function pageUpdater(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_PAGE:
      return {
        pageProps: action.pageProps,
        pageID: action.pageID
      }
    case actionType.RESET_PAGE:
      return initialState
    default:
      return state
  }
}
