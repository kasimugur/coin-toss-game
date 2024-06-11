import { useState } from 'react'
import './App.css'
import { CoinContainer } from './container'
// import RandomCoin from './container/RandomCoin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CoinContainer />
    {/* <RandomCoin /> */}
    </>
  )
}

export default App
