/**
 *  +  Portfolio  +
 *
 *  |  Test  |  app  |
 *  app/.
 *  reducers/.
 *  modalUpdater.unit.test.js
 *
 *  tests modalUpdater with actions
 *
 *  ~ Cameron Vargas ~
 **/

import * as types from '../actions/types'
import modalUpdater, { initialState } from './modalUpdater'

describe('reducer: modalUpdater', () => {
  /**
    TESTS:
    export default function modalUpdater(state = initialState, action)

    WITH actionTypes:
    SET_MODAL
    RESET_MODAL
  */
  it('should return the initial state', () => {
    expect(modalUpdater(undefined, {})).toEqual(initialState)
  })
  it('should handle SET_MODAL', () => {
    const state = {}
    const type = types.SET_MODAL
    const expectedState = {
      modalProps: {
        active: true,
        title: 'something'
      },
      modalType: 'info'
    }
    const action = { type, ...expectedState }
    expect(modalUpdater(state, action)).toEqual(expectedState)
  })
  it('should handle RESET_MODAL', () => {
    const state = {
      modalProps: {
        active: true,
        title: 'something'
      },
      modalType: 'info'
    }
    const type = types.RESET_MODAL
    const action = { type }
    expect(modalUpdater(state, action)).toEqual(initialState)
  })
})
