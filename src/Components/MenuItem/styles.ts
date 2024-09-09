import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Item = styled.li`
  display: flex;
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  background-color: ${cores.primary};

  ${ButtonLink} {
    background-color: ${cores.secundary};
    color: ${cores.primary};
    width: 100%;
  }
`

export const ItemTitle = styled.h4`
  color: ${cores.secundary};
  font-weight: 900;
`

export const ItemDescription = styled.p`
  color: ${cores.secundary};
  font-size: 14px;
`
