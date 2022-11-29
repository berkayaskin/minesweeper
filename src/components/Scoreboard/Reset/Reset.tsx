import styled from '@emotion/styled'
import { useState } from 'react'

export interface ResetProps {
  /**
   * Reset action handler
   */
  onReset: () => void
}

export const Reset = ({ onReset }: ResetProps) => {
  const [mouseDown, setMouseDown] = useState(false)

  const handleMouseDown = () => {
    setMouseDown(!mouseDown)
  }

  const handleMouseLeave = () => {
    setMouseDown(false)
  }

  return (
    <Button onClick={onReset} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave}>
      {mouseDown ? '😮' : '🙂'}
    </Button>
  )
}

const Button = styled.button`
  cursor: pointer;
  font-size: 1.5vw;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`
