import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LaDolce from './pages/LaDolce'

const Rotes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LaDolce" element={<LaDolce />} />
  </Routes>
)

export default Rotes
