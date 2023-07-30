import React, { useEffect, useState } from 'react'
import BotCollection from './BotCollection'

function App() {
  const [botArray, setBotArray] = useState([])
  const [enlistedBots, setEnlistedBots] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/bots`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Error fetching data");
      }
      return resp.json()})
    .then((data) => {
      if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        throw new Error ("Wrong format")
      }
      setBotArray(data)})
    .catch((error) => console.error("Error fetching data", error))
  }, [])

  const enlistBot = (bot) => {
    if(!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot])
    }
  }

  return (
    <div>
      <BotCollection bots={botArray} enlistBot={enlistBot}/>
    </div>
  )
}

export default App