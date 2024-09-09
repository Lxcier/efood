import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Rotes from './routes'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Rotes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
