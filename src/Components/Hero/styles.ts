import styled from 'styled-components'

import background from '../../assets/images/fundo.png'
import { Container, cores } from '../../styles'

export const HeroContainer = styled.div`
  display: block;
  height: 360px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;

  img {
    display: block;
    margin: 0 auto;
  }

  ${Container} {
    max-width: fit-content;
    padding-top: 40px;
  }
`

export const Slogan = styled.h1`
  max-width: 539px;
  margin-top: 138px;
  font-size: 36px;
  font-weight: 900;
  color: ${cores.primary};
  text-align: center;
`
