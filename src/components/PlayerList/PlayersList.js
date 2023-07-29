import React from 'react'
import PlayerArray from '../Players'
import Player from '../Player/Player'
import '../PlayerList/PlayerList.css'


const PlayersList = () => {
  return (
    <div className='main'>
      <h1>Select Your Player</h1>
   <div className='cardd'>
      {PlayerArray.map((fplayer)=>
      <Player Playerr={fplayer}/> )}
        </div>
        </div>
  )
}

export default PlayersList