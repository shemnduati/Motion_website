import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HowItHelps from './components/HowItHelps/HowItHelps'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=''>
        <Navbar />
        <Hero />
        <HowItHelps />
      </main>
    </>
  )
}

export default App
