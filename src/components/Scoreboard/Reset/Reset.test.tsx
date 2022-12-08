import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Reset } from './Reset'

describe('Reset', () => {
  const RenderReset = () => <Reset onReset={() => null} />

   it('Reset renders correctly', () => {
     const { asFragment } = render(<RenderReset />)
     expect(asFragment()).toMatchSnapshot()
   })

  it('should render elements with initial state', () => {
    render(<RenderReset />)
    expect(screen.getByText('🙂')).toBeInTheDocument()
  })

  it('onReset handler should be called when clicked', () => {
    const onReset = jest.fn()
    render(<Reset onReset={onReset} />)
    screen.getByText('🙂').click()
    expect(onReset).toBeCalled()
  })

  it('should change state when onMouseDown and onMouseLeave are called', () => {
    render(<RenderReset />)

    const smile = screen.getByText('🙂')
    fireEvent.mouseDown(smile)
    expect(screen.getByText('😮')).toBeInTheDocument()

    const shocked = screen.getByText('😮')
    fireEvent.mouseLeave(shocked)
    expect(smile).toBeInTheDocument()
  })
})

global.React = React
