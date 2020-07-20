/**
 *  +  Portfolio  +
 *
 *  |  Test  |  app  |
 *  app/.
 *  actions/.
 *  index.unit.test.js
 *
 *  tests all action creators
 *
 *  ~ Cameron Vargas ~
 **/

import * as actions from './index.js'
import * as types from './types'

describe('actions', () => {
  /**
    TESTS:
    export const setPage = (pageProps, pageID) => {
    export const resetPage = () => {
  */
  it('should create an action to update the current Page', () => {
    const pageProps = {
      active: true,
      title: 'Cameron Vargas',
      subtitle: 'developer.'
    }
    const pageID = 'home'
    const expectedAction = {
      type: types.SET_PAGE,
      pageProps,
      pageID
    }
    expect(actions.setPage(pageProps, pageID)).toEqual(expectedAction)
  })
  it('should create an action to reset the current Page', () => {
    const expectedAction = {
      type: types.RESET_PAGE
    }
    expect(actions.resetPage()).toEqual(expectedAction)
  })

  /**
    TESTS:
    export const setModal = (modalProps, modalType) => {
    export const resetModal = () => {
  */
  it('should create an action to update the current Modal', () => {
    const modalProps = {
      title: 'Contact',
      submitText: 'Send',
      submitCallback: () => console.log('send'),
      props: {active: true}
    }
    const modalType = 'info'
    const expectedAction = {
      type: types.SET_MODAL,
      modalProps,
      modalType
    }
    expect(actions.setModal(modalProps, modalType)).toEqual(expectedAction)
  })
  it('should create an action to reset the current Modal', () => {
    const expectedAction = {
      type: types.RESET_MODAL
    }
    expect(actions.resetModal()).toEqual(expectedAction)
  })
})
