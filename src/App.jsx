import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=''>
        <Navbar />
      </main>
    </>
  )
}

export default App
