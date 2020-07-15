/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  components/.
 *  ModalController.js
 *
 *  Modal controller, renders predefined modal types using props passed from
 *  redux store.
 *
 *  ~ Cameron Vargas ~
 **/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as modals from './Modals'

const MODAL_TYPES = {
  'alert': modals.AlertModal,
  'info': modals.InformationModal,
  'contact': modals.ContactModal
}

const MODAL_PRESETS = {
  contact: {
    id: 'contact',
    props: {
      title: 'Contact',
      submitText: 'Send',
      submitCallback: () => console.log('send'),
      props: {active: true}
    }
  }
}

class ModalController extends Component {
  constructor(props) {
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleEvent() {
    this.props.handleEvent()
  }

  closeModal() {
    this.props.closeModal()
  }

  render() {
    if (!this.props.modalType) return null

    try {
      const Modal = MODAL_TYPES[this.props.modalType]
      const presetProps = MODAL_PRESETS[this.props.modalType]
      return (
        <Modal
          closeCallback={this.closeModal}
          {...presetProps.props}
          {...this.props.modalProps}
        />
      )
    } catch (err) {
      console.error(err)
      return null
    }
  }
}

ModalController.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.object
  ]),

  // passed down methods
  handleEvent: PropTypes.func,
  closeModal: PropTypes.func
}

ModalController.defaultProps = {
  modalType: null,
  modalProps: {
    active: false
  },
  handleEvent: () => {}
}

export default ModalController
