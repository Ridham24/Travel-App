import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Packages from './Components/Packages/Packages'
import Shop from './Components/Shop/Shop'
import About from './Components/About/About'
import Pages from './Components/Pages/Pages'
import News from './Components/News/News'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
