/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  components/.
 *  ClickCounter.js
 *
 *  Sample Component. Renders a Counter and Reset button, which counts how many
 *  times the ReactSpinner component was clicked, or to Reset the count.
 *  Passes data through Redux on the Container level.
 *
 *  ~ Cameron Vargas ~
 **/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent() {
    this.props.handleEvent()
  }

  render() {
    return (
      <div className={this.props.style}>
        <div className='subtitle'>{this.props.elementText}</div>
        {this.props.showElement
          ? <a className='button is-small'
            onClick={this.handleEvent}
            disabled={this.props.elementDisabled}
          >
            <span>Reset</span>
          </a>
          : ''}
      </div>
    )
  }
}

ClickCounter.propTypes = {
  elementText: PropTypes.number.isRequired,
  showElement: PropTypes.bool,
  elementDisabled: PropTypes.bool,
  style: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]),

  // pass down methods
  handleEvent: PropTypes.func
}

ClickCounter.defaultProps = {
  showElement: true,
  elementDisabled: false,
  style: 'click-counter',
  handleEvent: () => {}
}

export default ClickCounter