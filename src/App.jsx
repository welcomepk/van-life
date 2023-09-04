import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

import './server'
import './App.css'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          {/* Van  (here nothing to share among these two components bellow, so just added pathles Route) */}
          {/* <Route path='vans'>
            <Route index element={<Vans />} />
            <Route path=':id' element={<VanDetail />} />
          </Route> */}

          {/* OR keep it simple */}
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />


          {/* Host (this one shares commen nav so layout added to its parent) */}
          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
