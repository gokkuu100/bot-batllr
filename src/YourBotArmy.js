import React from 'react'

function YourBotArmy(enlistedBots) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {enlistedBots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt="Bot" />
          <h2>Name: {bot.name}</h2>
          <p>Catchphrase: {bot.catchphrase}</p>
          <h3>Class: {bot.bot_class}</h3>
          <p>
            Health: {bot.health} Damage: {bot.damage}
          </p>
          <button onClick={() => dischargeBot(bot)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default YourBotArmy