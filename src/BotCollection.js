import React from 'react'

function BotCollection() {
  return (
    <div>
      {Object.values(bots).map((bot) => (
        <div key={bot.key}>
          <img src={bot.avatar_url} alt="bot" />
          <h2>Name: {bot.name}</h2>
          <p>Catchphrase: {bot.catchphrase}</p>
          <h3>Class: {bot.bot_class}</h3>
          <p>
            Health: {bot.health} Damage: {bot.damage} Armour: {both.armour}
          </p>
        </div>
      ))}
    </div>
  )
}

export default BotCollection