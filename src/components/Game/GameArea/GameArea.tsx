import styled from '@emotion/styled'
import { ReactNode } from 'react'

export interface GameAreaProps {
  children: ReactNode
}

export const GameArea = ({ children }: GameAreaProps) => {
  return <Frame>{children}</Frame>
}

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 6px solid #e3e3e3;
  background-color: #e3e3e3;
`
