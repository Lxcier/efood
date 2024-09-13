import { Container } from '../styles'

import Hero from '../Components/Hero'
import RestaurantsList from '../Components/RestaurantsList'

import sushi from '../assets/images/sushi.png'
import dolceVita from '../assets/images/dolce_vita.png'

import Restaurant from '../models/Restaurant'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: sushi,
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    page: '/ladolce',
  },
  {
    id: 2,
    title: 'Dolce Vita',
    image: dolceVita,
    rate: 4.8,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/ladolce',
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    image: sushi,
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    page: '/ladolce',
  },
  {
    id: 4,
    title: 'Dolce Vita',
    image: dolceVita,
    rate: 4.8,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/ladolce',
  },
]

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <RestaurantsList restaurants={restaurants} />
      </Container>
    </>
  )
}

export default Home
