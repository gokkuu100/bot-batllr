import React from 'react'

function BotCollection({ bots, enlistBot, enlistedBot }) {
  const handleEnlist = (bot) => {
    enlistBot(bot)
  }
  return (
    <div>
      {Object.values(bots).map((bot) => (
        <div key={bot.key} onClick={() => handleEnlist(bot)}>
          <img src={bot.avatar_url} alt="bot" />
          <h2>Name: {bot.name}</h2>
          <p>Catchphrase: {bot.catchphrase}</p>
          <h3>Class: {bot.bot_class}</h3>
          <p>
            Health: {bot.health} Damage: {bot.damage} Armour: {bot.armour}
          </p>
        </div>
      ))}
    </div>

  )
}

export default BotCollection