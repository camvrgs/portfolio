/**
 *  +  Portfolio  +
 *
 *  |  Test  |  app  |
 *  app/.
 *  actions/.
 *  Modals.unit.test.js
 *
 *  tests Modal component prototypes
 *
 *  ~ Cameron Vargas ~
 **/

import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import * as modals from './Modals'

describe('Modals components', () => {
  /**
    TESTS:
    Modals
    export const AlertModal = ({closeCallback, title, message, props})
    export const InformationModal = ({closeCallback, title, message, children, submitCallback, submitText, props})
    export const ContactModal = ({closeCallback, title, message, submitCallback, submitText, props})
  */
  afterEach(() => {
    // Restore to the default sandbox
    sinon.restore()
  })

  describe('<AlertModal />', () => {
    it('renders basic <AlertModal /> component', () => {
      const expectedTitle = 'foo'
      const expectedMessage = 'bar'
      const expectedObject = {
        title: expectedTitle,
        message: expectedMessage,
        props: {
          active: true
        }
      }
      const wrapper = shallow(
        <modals.AlertModal
          closeCallback={() => {}}
          {...expectedObject}
        />
      )
      expect(wrapper.props().className).toEqual('modal is-active')
      expect(wrapper.contains(<h2>{expectedTitle}</h2>)).toEqual(true)
      expect(wrapper.contains(<div className="message-body">{expectedMessage}</div>)).toEqual(true)
    })
    it('correctly passes and simulates fn to the close button for <AlertModal /> component', () => {
      const closeMockFn = sinon.spy()
      const props = {
        title: 'foo',
        message: 'bar',
        props: {
          active: true
        }
      }
      const wrapper = shallow(
        <modals.AlertModal
          closeCallback={closeMockFn}
          {...props}
        />
      )

      expect(closeMockFn.notCalled).toBe(true)
      // or expect(closeMockFn).toHaveProperty('callCount', 0)
      wrapper.find('button.delete').simulate('click')
      expect(closeMockFn.calledOnce).toBe(true)
      // or expect(closeMockFn).toHaveProperty('callCount', 1)
    })
    // add snapshot
  })
  describe('<InformationModal />', () => {
    it('renders basic <InformationModal /> component', () => {
      const expectedTitle = 'foo'
      const expectedMessage = 'bar'
      const expectedObject = {
        title: expectedTitle,
        message: expectedMessage,
        props: {
          active: true
        }
      }
      const wrapper = shallow(
        <modals.InformationModal
          closeCallback={() => {}}
          submitCallback={() => {}}
          {...expectedObject}
        />
      )
      expect(wrapper.props().className).toEqual('modal is-active')
      expect(wrapper).toContainMatchingElement(<h2>{expectedTitle}</h2>)
      expect(wrapper.contains(<div className="message-body">{expectedMessage}hi</div>)).toEqual(true)
      expect(wrapper.contains(<button className="button is-success" onClick={() => {}}>hi</button>)).toEqual(true)
    })
    it('correctly passes and simulates fn to the close button for <InformationModal /> component', () => {
      const closeMockFn = sinon.spy()
      const props = {
        title: 'foo',
        message: 'bar',
        props: {
          active: true
        }
      }
      const wrapper = shallow(
        <modals.InformationModal
          closeCallback={closeMockFn}
          {...props}
        />
      )

      expect(closeMockFn.notCalled).toBe(true)
      // or expect(closeMockFn).toHaveProperty('callCount', 0)
      wrapper.find('button.delete').simulate('click')
      expect(closeMockFn.calledOnce).toBe(true)
      // or expect(closeMockFn).toHaveProperty('callCount', 1)
    })
    // add snapshot
  })
})
