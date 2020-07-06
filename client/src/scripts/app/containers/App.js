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

import ClickCounter from '../components/ClickCounter'
import ReactSpinner from '../components/ReactSpinner'

export class App extends Component {
  constructor(props) {
    super(props)
    this.handleReactClick = this.handleReactClick.bind(this)
    this.handleCounterClick = this.handleCounterClick.bind(this)
  }

  UNSAFE_componentWillMount() {
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
  }

  handleReactClick() {
    const current_click_num = this.props.clicks
    this.props.actions.updateCounter(current_click_num + 1)
  }
  handleCounterClick() {
    this.props.actions.resetCounter()
  }

  render() {
    return (
      <div className='app-container'>
        <ReactSpinner
          elementText={'React has rendered successfully!'}
          handleEvent={this.handleReactClick}
        />
        <ClickCounter
          elementText={this.props.clicks}
          handleEvent={this.handleCounterClick}
        />
      </div>
    )
  }
}

App.propTypes = {
  clicks: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  actions: PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(state => {
  const clicks = state.clicks

  return {
    clicks
  }
}, mapDispatchToProps)(App)
