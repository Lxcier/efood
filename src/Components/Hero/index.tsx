import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'
import { HeroContainer, Slogan } from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <img src={logo} alt="Logo" />
        <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
      </Container>
    </HeroContainer>
  )
}

export default Hero
