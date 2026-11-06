import React from 'react'
import Header from './pages/Header'
import Hero from './pages/Hero'
import State from './pages/State'
import FeaturedWatches from './pages/FeaturedWatch'
import Collections from './pages/Collections'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Visit from './pages/Visit'
import WhatsAppButton from './pages/WhatsaapMessage'
import Footer from './pages/Footer'

function App() {
  return (
    <div className='h-auto w-screen bg-[var(--bg)]'>
       <Header/>
       <Hero/>
       <State/>
       <FeaturedWatches/>
       <Collections/>
       <About/>
       <Reviews/>
       <Visit/>
       <WhatsAppButton/>
       <Footer/>
    </div>
  )
}

export default App
