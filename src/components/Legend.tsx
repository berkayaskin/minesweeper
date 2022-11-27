import { Box, BoxProps, HStack, Text, TextProps } from '@chakra-ui/react'

export const Legend = () => {
  return (
    <Parent>
      <Text as='h1' fontSize='lg' color='whiteAlpha.800' mr={1}>
        flag:{' '}
      </Text>
      <Key color='red.600'>ctrl</Key>
      <Text mx={1}>+</Text>
      <Key color='blue.600'>click</Key>
    </Parent>
  )
}

// Path: src/components/Key.tsx
const Parent = (props: BoxProps) => (
  <Box as='code' fontSize='sm'>
    <HStack justifyContent='center'>{props.children}</HStack>
  </Box>
)

// Path: src/components/Key.tsx
const Key = (props: TextProps) => (
  <Text
    as='span'
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
