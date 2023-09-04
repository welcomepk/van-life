import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

import './server'
import './App.css'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          {/* Van */}
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />

          {/* host */}
          <Route path='/host' element={<Dashboard />} />
          <Route path='/host/income' element={<Income />} />
          <Route path='/host/reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
