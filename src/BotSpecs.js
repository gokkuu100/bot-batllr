import React from 'react'

function BotSpecs({ botselected, goBack, enlistBot}) {
  const {id, avatar_url, name, catchphrase, bot_class, health, damage, armour, created_at, updated_at} = botselected;
  const handleEnlist = () => {
    enlistBot(botselected);
    goBack();
  }
  return (
    <div>
      <img src={avatar_url} alt={`Bot`} />
      <h2>Name: {name}</h2>
      <p>Catchphrase: {catchphrase}</p>
      <h3>Class: {bot_class}</h3>
      <p>Health: {health} Damage: {damage} Armour: {armour}</p>
      <p>Created at: {created_at}</p>
      <p>Updated at: {updated_at}</p>
      <button onClick={goBack}>Go back</button>
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  )
}

export default BotSpecs