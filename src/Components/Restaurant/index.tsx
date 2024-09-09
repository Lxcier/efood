import estrela from '../../assets/images/estrela.png'
import {
  Description,
  Infos,
  Rate,
  RateWrapper,
  RestaurantContainer,
  RestaurantHeader,
  Title,
} from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  rate: number
  image: string
  page: string
}

const Restaurant = ({ title, description, rate, image, page }: Props) => {
  return (
    <RestaurantContainer>
      <img src={image} alt={title} />
      <Infos>
        <RestaurantHeader>
          <Title>{title}</Title>
          <RateWrapper>
            <Rate>{rate}</Rate>
            <img src={estrela} alt="Icone de estrela" />
          </RateWrapper>
        </RestaurantHeader>
        <Description>{description}</Description>
        <Button text="Saiba mais" link={page} />
      </Infos>
    </RestaurantContainer>
  )
}

export default Restaurant
