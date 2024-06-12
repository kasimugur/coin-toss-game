import { useEffect, useState } from "react"
import TailsCard from "../components/TailsCard"

export default function CoinContainer() {
  const [tails, setTails] = useState(0)
  const [heads, setHeads] = useState(0)
  const [flips, setFlips] = useState(0)
  // const [currCoin, setCurrCoin] = useState(null)
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
      tails: setTails(newCoin.side === "tails" ? tails + 1 : tails),
      heads: setHeads(newCoin.side === "heads" ? heads + 1 : heads),
    }
  }

  function choice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  // const card =  (flips !== 0 && newCoin.side === "tails" ?  )
  
  return (
    <>
      <div className="coinContainer">
        <h1>coin toos game</h1>
        {flips !== 0 && <img src={newCoin.imgSrc} alt={newCoin.side} />}
        {flips !== 0 && newCoin.side === "tails" ? <TailsCard /> : "gelmedi"}
        <h2> yapılan fırlatma {flips}  </h2>
        <h2>{tails} tanesi tura  </h2>
        <h2>{heads} tanesi yazı</h2>
        { }
        <button onClick={handleClick} className="btn">Flip</button>
      </div>
    </>
  )
}