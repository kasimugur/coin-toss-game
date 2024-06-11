import { useState } from 'react'
import './App.css'
import { CoinContainer } from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CoinContainer />
    </>
  )
}

export default App
