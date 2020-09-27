import React from 'react'
import {renderToggle, fireEvent} from '../../test/utils'
// import Usage, { Toggle } from '../exercises-final/07'
import Usage, { Toggle } from '../exercises/07'

test('renders a toggle component', () => {
  const handleToggle = jest.fn()
  const {toggleButton, toggle} = renderToggle(
    <Usage onToggle={handleToggle} />,
  )
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})

test('can reset the state of the toggle', () => {
  const handleReset = jest.fn()
  const {toggleButton, toggle, getByText} = renderToggle(
    <Usage onToggle={() => {}} onReset={handleReset} />,
  )
  toggle()
  fireEvent.click(getByText('Reset'))
  expect(toggleButton).toBeOff()
  expect(handleReset).toHaveBeenCalledTimes(1)
  expect(handleReset).toHaveBeenCalledWith(false)
})

test('toggle uses default props', () => {
  expect(typeof Toggle.defaultProps.initialOn).toBe('boolean')
  expect(typeof Toggle.defaultProps.onReset).toBe('function')
})
