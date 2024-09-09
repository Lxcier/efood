import styled from 'styled-components'
import { Container, cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.secundary};
  padding: 40px 0;

  ${Container} {
    max-width: fit-content;
  }

  p {
    color: ${cores.primary};
    width: 480px;
    text-align: center;
  }
`
export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`

export const Social = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin: 32.5px 0 80px 0;
`
