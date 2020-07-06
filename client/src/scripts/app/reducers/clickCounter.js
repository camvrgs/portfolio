/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  reducers/.
 *  clickCounter.js
 *
 *  reducer for clickCounter
 *  handles actions:
 *    updateCounter
 *    resetCounter
 *
 *  using actionTypes:
 *    UPDATE_COUNTER
 *    RESET_COUNTER
 *
 *  https://redux.js.org/basics/reducers
 *
 *  ~ Cameron Vargas ~
 **/

import * as actionType from '../actions/types'

const initialState = 0

export default function clickCounter(state = initialState, action) {
  switch (action.type) {
    case actionType.UPDATE_COUNTER:
      return action.data
    case actionType.RESET_COUNTER:
      return initialState
    default:
      return state
  }
}
