/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  components/.
 *  Modals.js
 *
 *  Predefines Modal types to be render by controller
 *
 *  ~ Cameron Vargas ~
 **/
import React from 'react'
import PropTypes from 'prop-types'

// Alert Modal //

export const AlertModal = ({closeCallback, title, message, props}) => {
  return (
    <div className={`modal${props.active ? ' is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="message">
          <div className="message-header">
            <h2>{title}</h2>
            <button className="delete" aria-label="delete" onClick={closeCallback}></button>
          </div>
          <div className="message-body">
            {message}
          </div>
        </article>
      </div>
    </div>
  )
}

AlertModal.propTypes = {
  closeCallback: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  props: PropTypes.shape({
    active: PropTypes.bool
  })
}

AlertModal.defaultProps = {}

// Info Modal //

export const InformationModal = ({closeCallback, title, message, children, submitCallback, submitText, props}) => {
  return (
    <div className={`modal${props.active ? ' is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={closeCallback}></button>
        </header>
        <section className="modal-card-body">
          {message}
          {children}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={submitCallback}>{submitText}</button>
          <button className="button" onClick={closeCallback}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

InformationModal.propTypes = {
  closeCallback: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  props: PropTypes.shape({
    active: PropTypes.bool.isRequired
  }),
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]),

  submitCallback: PropTypes.func,
  submitText: PropTypes.string
}

InformationModal.defaultProps = {
  submitText: 'Submit'
}

// Info Modal //

export const ContactModal = ({closeCallback, title, message, submitCallback, submitText, props}) => {
  return (
    <InformationModal
      closeCallback={closeCallback}
      title={title}
      submitCallback={submitCallback}
      submitText='Send'
      props={props}
    >
      <form>
        hello form.
      </form>
    </InformationModal>
  )
}

ContactModal.propTypes = {
  closeCallback: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  props: PropTypes.shape({
    active: PropTypes.bool.isRequired
  }),

  submitCallback: PropTypes.func,
  submitText: PropTypes.string
}

ContactModal.defaultProps = {
  submitText: 'Submit'
}
