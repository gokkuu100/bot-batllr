import React, { useEffect, useState } from 'react'
import BotCollection from './BotCollection'

function App() {
  const [botArray, setBotArray] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/bots`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Error fetching data");
      }
      return resp.json();
    })
    .then((data) => {
      if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        throw new Error ("Wrong format")
      }
    })
    .catch((error) => console.error("Error fetching data", error))
  }, [])

  return (
    <div>
      <BotCollection />
    </div>
  )
}

export default App