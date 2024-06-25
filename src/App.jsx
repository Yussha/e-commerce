import './App.css'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'
import ContactUs from './pages/Contact/ContactUs'

// Components
import Overlay from './components/Overlay'
import ProductCollection from './components/ProductCollection'
import Footer from './components/Footer'
import WishlistPage from './components/WishlistPage'
import ShoppingCartArea from './components/ShoppingCartArea'

// ContextProvider
import ViewInfoModalContext from './context/ViewInfoModalContext'
import CartProvider from "./context/CartProvider"
import OverlayProvider from './context/OverlayProvider'

// Router
import { Routes, Route } from "react-router-dom";

import { useState } from 'react'

function App() {
  const [activeOverlay, setActiveOverlay] = useState(false);

  return (
    <CartProvider setActiveOverlay={setActiveOverlay}>
      <ViewInfoModalContext setActiveOverlay={setActiveOverlay} activeOverlay={activeOverlay}>
        <OverlayProvider setActiveOverlay={setActiveOverlay} activeOverlay={activeOverlay}>
          <main className='app'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/contactUs' element={<ContactUs />} />
              <Route path='/wishlist' element={<WishlistPage />} />
              <Route path='/shoppingCartArea' element={<ShoppingCartArea />} />
            </Routes>
            <ProductCollection />
            <Footer />
            <Overlay />
          </main>
        </OverlayProvider>
      </ViewInfoModalContext>
    </CartProvider>
  )
}

export default App
