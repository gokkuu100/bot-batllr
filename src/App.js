import React, { useEffect, useState } from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

function App() {
  const [botArray, setBotArray] = useState([])
  const [enlistedBots, setEnlistedBots] = useState([])
  const [selectedBot, setSelectedbot] = useState(null)

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

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
      header: {
        "Content-Type":"application/json"
      }
    })
    .then((resp) => {
      if(!resp.ok) {
        throw new Error ("Failed to delete from backend")
      }
      const updatedEnlistedBots = enlistedBots.filter((enlistBot) => enlistBot.id !== bot.id)
      setEnlistedBots(updatedEnlistedBots)
    })
    .catch((error) => console.error("Error deleting backend", error))
  }

  const showBotSpecs = (bot) => {
    setSelectedbot(null)
  }

  const goBack = () => {
    setSelectedbot(null)
  }

  return (
    <div>
      
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot}/>
      <BotCollection bots={botArray} enlistBot={enlistBot} enlistedBot={enlistedBots}/>
    </div>
  )
}

export default App