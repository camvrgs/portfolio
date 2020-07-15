/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  components/.
 *  Pages.js
 *
 *  Predefines Page types to be render by controller
 *
 *  ~ Cameron Vargas ~
 **/
import React from 'react'
import PropTypes from 'prop-types'

// Home Page //

export const HomePage = ({pageNavCallback, modalCallback, title, subtitle, content, children, active, id}) => {
  return (
    <div className={`container has-text-centered ${active ? ' show' : ''}`}>
      <div className="columns">
        <div id="title" className="column is-6 is-offset-3">
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
        </div>
      </div>
      <div className="columns">
        <div id="content" className="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">
          { content ? (
            <div className="box">
              {content}
            </div>
          ) : null }
          {children}
        </div>
      </div>
      <div className="columns">
        <div id="selectors" className="column is-12">
          <div>
            <a className={`button is-link ${id === 'home' ? '' : 'is-outlined'}`} onClick={() => pageNavCallback({props: {active: true}, id: 'home'})}>
              <span className="icon"><i className="fas fa-home"></i></span>
            </a>
            <a className={`button is-link ${id === 'about' ? '' : 'is-outlined'}`} onClick={() => pageNavCallback({props: {active: true}, id: 'about'})}>
              <span>about</span>
            </a>
            <a className={`button is-link is-outlined`} target="_blank" rel="noopener noreferrer" href="https://github.com/camvrgs">
              <span className="icon"><i className="fab fa-github"></i></span>
              <span>github</span>
            </a>
            <a className={`button is-link is-outlined`} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cameron-vargas/">
              <span className="icon"><i className="fab fa-linkedin"></i></span>
              <span>linkedin</span>
            </a>
            <a className={`button is-link is-outlined`} onClick={() => modalCallback({props: {active: true}, id: 'contact'})}>
              <span>contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  active: PropTypes.bool.isRequired,
  id: PropTypes.string,
  pageNavCallback: PropTypes.func,
  modalCallback: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ])
}

HomePage.defaultProps = {}

// About Page //
/*

export const AboutPage = ({pageNavCallback, title, message, submitCallback, submitText, props}) => {
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
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={submitCallback}>{submitText}</button>
          <button className="button" onClick={closeCallback}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

AboutPage.propTypes = {
  pageNavCallback: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  props: PropTypes.shape({
    active: PropTypes.bool.isRequired
  })

}

AboutPage.defaultProps = {}

*/
