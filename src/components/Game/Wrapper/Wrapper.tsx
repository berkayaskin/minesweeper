import styled from '@emotion/styled'
import { ReactNode } from 'react'

export interface WrapperProps {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Frame>{children}</Frame>
}
const Frame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
`
