import { Heading } from '@chakra-ui/react'

export interface HeaderProps {
  /**
   * Title of the game
   * @example 'Minesweeper'
   * @example 'Sudoku'
   * @example 'Chess'
   */
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Heading textAlign='center' fontFamily='monospace' mb='8' fontSize='5xl' color='whiteAlpha.800'>
      {title}
    </Heading>
  )
}
