/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  containers/.
 *  App.js
 *
 *  Sample Container. Renders both ReactSpinner and ClickCounter, sets up redux
 *  hook and passes down updated data to each of the components as needed
 *
 *  ~ Cameron Vargas ~
 **/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'

import ModalController from '../components/ModalController'
import PageController from '../components/PageController'

export class App extends Component {
  constructor(props) {
    super(props)

    this.handlePageUpdate = this.handlePageUpdate.bind(this)
    this.handlePageReset = this.handlePageReset.bind(this)
    this.handleModalUpdate = this.handleModalUpdate.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)

    console.log('alive')
  }

  handlePageUpdate(page) {
    this.props.actions.setPage(page.props, page.id)
  }
  handlePageReset() {
    this.props.actions.resetPage()
  }
  handleModalUpdate(modal) {
    // setModal(modalProps, modalType)
    this.props.actions.setModal(modal.props, modal.id)
  }
  handleModalClose() {
    this.props.actions.resetModal()
  }

  render() {
    return (
      <div className='app-container'>
        <ModalController
          modalType={this.props.modal.modalType}
          modalProps={this.props.modal.modalProps}
          closeModal={() => this.handleModalClose()}
        />
        <div className="hero is-fullheight has-fixed-navbar">
          <div className="hero-body">
            <PageController
              pageID={this.props.page.pageID}
              pageProps={this.props.page.pageProps}
              pageNavigation={this.handlePageUpdate}
              openModal={this.handleModalUpdate}
            />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  modal: PropTypes.object,
  page: PropTypes.object,
  actions: PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(state => {
  return {
    'modal': state.modal,
    'page': state.page
  }
}, mapDispatchToProps)(App)
