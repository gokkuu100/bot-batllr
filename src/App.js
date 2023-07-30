import React, { useEffect, useState } from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

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

  const releaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots)
  }
  

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot}/>
      <BotCollection bots={botArray} enlistBot={enlistBot} enlistedBot={enlistedBots}/>
    </div>
  )
}

export default App