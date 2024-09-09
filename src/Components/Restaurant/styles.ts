import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantContainer = styled.div`
  color: ${cores.primary};
  max-width: 472px;
  min-width: 472px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  border: 1px solid ${cores.primary};
  border-top: 0px;
  margin-top: -4px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`

export const Rate = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  text-align: left;
  font-size: 14px;
`

export const RestaurantHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
