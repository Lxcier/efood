import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonLink = styled(Link)`
  cursor: pointer;
  color: ${cores.secundary};
  background-color: ${cores.primary};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16.41px;
  text-align: center;
  display: inline-block;
  width: fit-content;
  text-decoration: none;
`
