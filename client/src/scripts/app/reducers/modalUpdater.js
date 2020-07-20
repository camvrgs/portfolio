/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  reducers/.
 *  modalUpdater.js
 *
 *  reducer for modalUpdater
 *  handles actions (actions/index):
 *    setModal
 *    resetModal
 *
 *  using actionTypes (actions/types):
 *    SET_MODAL
 *    RESET_MODAL
 *
 *  https://redux.js.org/basics/reducers
 *
 *  ~ Cameron Vargas ~
 **/

import * as actionType from '../actions/types'

export const initialState = {
  modalProps: {
    active: false
  },
  modalType: null
}

export default function modalUpdater(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType
      }
    case actionType.RESET_MODAL:
      return initialState
    default:
      return state
  }
}
