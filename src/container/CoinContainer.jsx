import { useState } from "react"

export default function CoinContainer() {
  const [tails, setTails] = useState(0)
  const [heads, setHeads] = useState(0)
  const [flips, setFlips] = useState(0)
  const coin = {
    coins: [
      {
        side: "tails",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"
      },
      {
        side: "heads",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png"
      }
    ]
  }
  function handleClick() {
    const newCoin = choice(coin.coins)
    return {
      currCoin: newCoin,
      flips: setFlips(flips + 1),
      heads: setHeads(newCoin.side === "tails" ? heads + 1 : heads),
      tails: setTails(newCoin.side === "heads" ? tails + 1 : tails),
    }
  }

  function choice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }
  return (
    <>
      <div className="coinContainer">
        <h1>coin toos game</h1>
        <h2>{flips} : flips </h2>
        <h2>{tails} : tails </h2>
        <h2>{heads} : heads</h2>
        <button onClick={handleClick} className="btn">Flip</button>
      </div>
    </>
  )
}