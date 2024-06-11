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
  const newCoin = choice(coin.coins)
  function handleClick() {
    return {
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
        {flips !== 0 && <img src={newCoin.imgSrc} alt={newCoin.side} />}
        <h2> yapılan fırlatma {flips}  </h2>
        <h2>{tails} tanesi tura  </h2>
        <h2>{heads} tanesi yazı</h2>
        
        <button onClick={handleClick} className="btn">Flip</button>
      </div>
    </>
  )
}