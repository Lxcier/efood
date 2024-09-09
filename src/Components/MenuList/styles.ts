import styled from 'styled-components'
import { Container } from '../../styles'

export const MenuContainer = styled.div`
  ${Container} {
    max-width: 1024px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`
