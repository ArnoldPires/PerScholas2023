import { useState } from 'react'
import './card.css'

export default function Card(props) {
  const [playerName, setPlayerName] = useState('NA')
  const [ characterName, setCharacterName ] = useState('NA')
  const [ characterRace, setCharacterRace ] = useState('NA')
  const [ passiveSkills, setPassiveSkills ] = useState('NA')
  const [ bio, setBio ] = useState('NA')

  return (
    <div className='Card'>
      <div className='cardTop'>
        <h2>{playerName}</h2>
        <h4>{characterName}</h4>
        <h4>{characterRace}</h4>
        <h4>{passiveSkills}</h4>
      </div>
      <div className='cardBottom'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, commodi iste dolores minima excepturi cumque! Sapiente aperiam eos expedita veritatis voluptatibus? Repellat laboriosam asperiores neque corporis cum veritatis nam suscipit!</p>
      </div>
    </div>
  )
}