import React from 'react'

const Card = ({ name, specie, age }) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{specie}</h2>
        <h3>{age}</h3>
    </div>
  )
}

export default Card