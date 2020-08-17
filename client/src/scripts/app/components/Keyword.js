/**
 *
 * Keyword = () => {
 *  text
 *  text-color
 *  text-underline
 *  action
 * }
 *
 **/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Keyword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
    this.node = React.createRef()
    this.handleCLose = this.handleCLose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleCLose, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleCLose, false)
  }

  handleCLose(e) {
    if (!this.node.current.contains(e.target)) {
      this.setState({ active: false })
    }
  }

  handleToggle(e, b) {
    if (this.props.onHover) {
      this.setState({active: b})
      return
    }

    console.log(this.props.text, 'clicked!')
    this.setState({active: !this.state.active})
  }

  render() {
    const style = {
      color: this.props.textColor,
      borderBottom: this.props.textUnderline ? `2px solid ${this.props.textUnderlineColor}` : 'none',
      paddingBottom: '2px'
    }

    const toggleProps = {
      onMouseEnter: this.props.onHover ? (e) => this.handleToggle(e, true) : null,
      onMouseLeave: this.props.onHover ? (e) => this.handleToggle(e, false) : null,
      onClick: !this.props.onHover ? (e) => this.handleToggle(e, null) : null,
      onBlur: this.props.onBlurClose ? (e) => this.handleToggle(e, false) : null

    }

    return (
      <div ref={this.node} className={`dropdown ${this.props.menuAbove ? 'is-up' : ''} ${this.state.active ? 'is-active' : ''}`}>
        <a className='dropdown-trigger' aria-haspopup='true' {...toggleProps} >
          <strong className={`keyword${this.props.className}`} style={style}>
            {this.props.text}
          </strong>
        </a>
        <div className={`dropdown-menu ${this.props.menuClassName}`} id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            {this.props.menuContent}
          </div>
        </div>
      </div>
    )
  }
}

Keyword.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  menuAbove: PropTypes.bool,
  menuContent: PropTypes.element,
  menuClassName: PropTypes.string,
  textColor: PropTypes.string,
  textUnderline: PropTypes.bool,
  textUnderlineColor: PropTypes.string,
  onHover: PropTypes.bool,
  onBlurClose: PropTypes.bool,
  action: PropTypes.func
}

Keyword.defaultProps = {
  textColor: '#f42a1b',
  className: '',
  menuAbove: false,
  menuContent: <div className='dropdown-item'><p>You can add the <code>is-up</code> modifier to have a dropdown menu that appears above the dropdown button.</p></div>,
  menuClassName: '',
  textUnderline: true,
  textUnderlineColor: '#feae19',
  onHover: true,
  onBlurClose: false,
  action: () => {console.log('clicked!')
  }
}
