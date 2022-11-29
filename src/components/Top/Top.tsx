import { Container } from '@chakra-ui/react'
import { Header, HeaderProps } from './Header'
import { Legend, LegendProps } from './Legend'

export type TopComponentType = HeaderProps & LegendProps

export const Top = ({ title, ...legendProps }: TopComponentType) => {
  return (
    <Container maxWidth='sm'>
      <Header title={title} />
      <Legend {...legendProps} />
    </Container>
  )
}
