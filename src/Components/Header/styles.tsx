import styled from 'styled-components'

import background from '../../assets/images/fundo.png'
import { Container, cores } from '../../styles'

export const Header = styled.header`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 162px;
  padding: 40px 0;

  ${Container} {
    max-width: 1024px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a`
  color: ${cores.primary};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`
