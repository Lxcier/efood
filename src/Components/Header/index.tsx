import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'

import { Header as HeaderDiv, Link, Nav } from './styles'

const Header = () => {
  return (
    <HeaderDiv>
      <Container>
        <Nav>
          <Link>Restaurantes</Link>
          <a href="/">
            <img src={logo} alt="Efood" />
          </a>
          <Link href="/cart">
            <span>0</span> produto(s) no carrinho
          </Link>
        </Nav>
      </Container>
    </HeaderDiv>
  )
}

export default Header
