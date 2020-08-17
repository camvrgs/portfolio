/**
 *
 **/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Keyword from './Keyword'

const LANGUAGES = {en: 'Hello.', ru: 'Привет.', tk: 'Merhaba.'}

const TRANS = {
  en: {
    1: ' My name is'
  },
  ru: {
    1: ' Меня зовут'
  },
  tk: {
    1: ' Benim ismim'
  }
}

export default class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en'
    }
  }

  render() {
    const currentLang = this.state.language
    const {[this.state.language]: currentGreeting, ...langOptions} = LANGUAGES
    return (
      <div className='container'>
        <div className='hero is-fullheight has-fixed-navbar'>
          <div className='hero-body'>
            <div className='container show'>
              <div className='columns is-vcentered'>
                <div id='title' className='column is-5 is-offset-1'>
                  <div className='subtitle is-muted mb-5'>
                    <Keyword
                      text={currentGreeting}
                      textColor='inherit'
                      textUnderline={false}
                      menuAbove={true}
                      menuContent={
                        <React.Fragment>
                          {Object.keys(langOptions).map((k, i) => {
                            return (
                              <a key={k} onClick={() => this.setState({language: k})} className='dropdown-item'>
                                <strong className='subtitle is-muted'>{LANGUAGES[k]}</strong>
                              </a>
                            )
                          })}
                        </React.Fragment>}
                      menuClassName='language-menu'
                      onHover={false}
                      onBlurClose={true}
                    />
                    <span>{TRANS[currentLang][1]}</span>
                  </div>
                  <h2 className='title is-1 is-bold is-spaced mb-3'>Cameron Vargas</h2>
                  <div><span>I am a </span><Keyword text='web developer'/><span> currently living in <Keyword text='Turkey'/>.</span></div>
                  <div><span>This is another line of text with a </span><Keyword text='keyword'/><span> in the middle.</span></div>
                  <div><span>And here is a <Keyword text='keyword'/> in the third line.</span></div>
                </div>
                <div className='column is-5'>
                  <div className='box'>
                    <p style={{height: '200px'}}>here is more content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LandingPage.propTypes = {}

LandingPage.defaultProps = {}
