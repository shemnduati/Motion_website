import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HowItHelps from './components/HowItHelps/HowItHelps'
import Uses from './components/Uses/Uses'
import Trust from './components/Trust/trust'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=''>
        <Navbar />
        <Hero />
        <HowItHelps />
        <Uses />
        <Trust />
        <Footer />
      </main>
    </>
  )
}

export default App
