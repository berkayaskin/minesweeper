import { Box, BoxProps, HStack, Text, TextProps } from '@chakra-ui/react'

export interface LegendProps {
  /**
   * Feature that should be activated after actions
   * @example 'Flag'
   * @example 'Question'
   * @example 'Reveal'
   * @example 'Restart'
   * @example 'New Game'
   */
  feature: string
  /**
   * First action that is required to activate feature
   * @example 'ctrl'
   * @example 'alt'
   * @example 'shift'
   */
  firstAction: string
  /**
   * Second action that is required to activate feature
   * @example 'click'
   * @example 'right click'
   * @example 'double click'
   * @example 'drag'
   * @example 'hover'
   */
  secondAction: string
}

export const Legend = ({ feature, firstAction, secondAction }: LegendProps) => {
  return (
    <Parent>
      <Text as='h1' fontSize='lg' color='whiteAlpha.800' mr={1}>
        {feature}:
      </Text>
      <FirstAction>{firstAction}</FirstAction>
      <Text mx={1}>+</Text>
      <SecondAction>{secondAction}</SecondAction>
    </Parent>
  )
}

const Parent = (props: BoxProps) => (
  <Box as='code' fontSize='sm'>
    <HStack justifyContent='center'>{props.children}</HStack>
  </Box>
)

const FirstAction = (props: TextProps) => (
  <Text
    as='span'
    color='red.600'
    display='inline-block'
    bgColor='gray.400'
    py={1}
    px={2}
    borderRadius={3}
    {...props}
  >
    {props.children}
  </Text>
)

const SecondAction = (props: TextProps) => (
  <Text
    as='span'
    color='blue.600'
    display='inline-block'
    bgColor='gray.400'
    py={1}
    px={2}
    borderRadius={3}
    {...props}
  >
    {props.children}
  </Text>
)
