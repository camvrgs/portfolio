/**
 *  +  Portfolio  +
 *
 *  |  Test  |  app  |
 *  app/.
 *  reducers/.
 *  store.int.test.js
 *
 *  tests store with reducer imports
 *
 *  ~ Cameron Vargas ~
 **/

import { createStore } from 'redux'
import rootReducer from '../reducers'

import * as modal from '../reducers/modalUpdater'
import * as page from '../reducers/pageUpdater'

describe('reducers', () => {
  /**
    TESTS:
    rootReducer
  */
  it('should return a store with the default the initial state of each reducer', () => {
    const store = createStore(rootReducer)
    expect(store.getState()).toEqual({
      modal: modal.initialState,
      page: page.initialState
    })
  })
})
