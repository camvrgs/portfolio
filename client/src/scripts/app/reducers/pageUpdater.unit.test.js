/**
 *  +  Portfolio  +
 *
 *  |  Test  |  app  |
 *  app/.
 *  reducers/.
 *  pageUpdater.unit.test.js
 *
 *  tests pageUpdater with actions
 *
 *  ~ Cameron Vargas ~
 **/

import * as types from '../actions/types'
import pageUpdater, { initialState } from './pageUpdater'

describe('reducer: pageUpdater', () => {
  /**
    TESTS:
    export default function pageUpdater(state = initialState, action)

    WITH actionTypes:
    SET_PAGE
    RESET_PAGE
  */
  it('should return the initial state', () => {
    expect(pageUpdater(undefined, {})).toEqual(initialState)
  })
  it('should handle SET_PAGE', () => {
    const state = {}
    const type = types.SET_PAGE
    const expectedState = {
      pageProps: {
        active: true,
        title: 'something',
        subtitle: 'something else'
      },
      pageID: 'randomID'
    }
    const action = { type, ...expectedState }
    expect(pageUpdater(state, action)).toEqual(expectedState)
  })
  it('should handle RESET_PAGE', () => {
    const state = {
      pageProps: {
        active: false,
        title: 'something'
      },
      pageID: 'about'
    }
    const type = types.RESET_PAGE
    const action = { type }
    expect(pageUpdater(state, action)).toEqual(initialState)
  })
})
