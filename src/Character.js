import React from 'react'

const Character = ({name, side, key}) => {
  return (
    <li key={key}>{name} <span>{side}</span></li>
  )
}

export default Character