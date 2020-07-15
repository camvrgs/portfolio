/**
 *  +  Portfolio  +
 *
 *  |  JS Module  |  app  |
 *  app/.
 *  components/.
 *  PageController.js
 *
 *  Page controller, renders predefined page types using props passed from
 *  redux store.
 *
 *  ~ Cameron Vargas ~
 **/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as pages from './Pages'

const PAGE_IDS = {
  'home': pages.HomePage,
  'about': pages.HomePage
  // 'projects': pages.Projects
}

const PAGE_PRESETS = {
  'home': {
    active: true,
    title: 'Cameron Vargas',
    subtitle: 'developer.'
  },
  'about': {
    active: true,
    title: 'Cameron Vargas',
    subtitle: 'about.'
  }
}

class PageController extends Component {
  constructor(props) {
    super(props)
    // add here
  }

  render() {
    if (!this.props.pageID) return null

    try {
      const Page = PAGE_IDS[this.props.pageID]
      const presetProps = PAGE_PRESETS[this.props.pageID]
      return (
        <Page
          pageNavCallback={this.props.pageNavigation}
          modalCallback={this.props.openModal}
          id={this.props.pageID}
          {...presetProps}
          {...this.props.pageProps}
        />
      )
    } catch (err) {
      console.error(err)
      return null
    }
  }
}

PageController.propTypes = {
  pageID: PropTypes.string,
  pageProps: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.object
  ]),

  // passed down methods
  pageNavigation: PropTypes.func,
  openModal: PropTypes.func
}

PageController.defaultProps = {
  pageID: 'home',
  pageProps: {
    active: false
  }
}

export default PageController
