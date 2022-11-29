import { Heading } from '@chakra-ui/react'

export interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Heading fontFamily='monospace' display='block' mb='8' fontSize='4xl' color='whiteAlpha.800'>
      {children}
    </Heading>
  )
}
