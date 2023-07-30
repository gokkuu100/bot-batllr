import React from 'react'

function YourBotArmy({enlistedBots, releaseBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {enlistedBots.map((bot) => (
        <div key={bot.id} onClick={() => releaseBot(bot)}>
          <img src={bot.avatar_url} alt="Bot" />
          <h2>Name: {bot.name}</h2>
          <p>Catchphrase: {bot.catchphrase}</p>
          <h3>Class: {bot.bot_class}</h3>
          <p>
            Health: {bot.health} Damage: {bot.damage}
          </p>
        </div>
      ))}
    </div>
  )
}

export default YourBotArmy