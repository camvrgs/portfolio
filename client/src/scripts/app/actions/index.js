/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  actions/.
 *  index.js
 *
 *  contains all redux action creators and thunk actions for the app
 *  https://redux.js.org/basics/actions#action-creators
 *
 *  ~ Cameron Vargas ~
 **/

import * as actionType from './types'

// Page Actions //

export const setPage = (pageProps, pageID) => {
  return {
    type: actionType.SET_PAGE,
    pageProps,
    pageID
  }
}

export const resetPage = () => {
  return {
    type: actionType.RESET_PAGE
  }
}

// Modal Actions //

export const setModal = (modalProps, modalType) => {
  return {
    type: actionType.SET_MODAL,
    modalProps,
    modalType
  }
}

export const resetModal = () => {
  return {
    type: actionType.RESET_MODAL
  }
}

/**
 *
 *  EXAMPLE ACTION CREATORS:
 *  ========================
 *
 *  export const setUser = (data) => {
 *    return {
 *      type: actionType.SET_USER,
 *      data
 *    }
 *  }
 *
 *  export const removeUser = () => {
 *    return {
 *      type: actionType.REMOVE_USER
 *    }
 *  }
 *
 **/

/**
 *
 *  EXAMPLE ASYNC THUNK ACTION CREATORS:
 *  ========================
 *
 *  export function getCurrentForms(){
 *    return function action(dispatch){
 *
 *      dispatch({type: actionType.GET_CURRENT_PDF_FORMS});
 *
 *      const request = axios.get(api.URL + api.GET_FORMS);
 *      return request.then(
 *        response => dispatch(getFormsSuccess(response)),
 *        error => dispatch(getFormsFail(error))
 *      );
 *    }
 *  }
 *
 *  export function getFormsSuccess(data){
 *    return{
 *      type: actionType.LOAD_PDF_FORMS,
 *      data,
 *    };
 *  }
 *
 *  export function getFormsFail(data){
 *    return{
 *      type: actionType.ERROR_FETCHING_FORM,
 *      data,
 *    };
 *  }
 *
 **/
