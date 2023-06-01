import React from 'react'

const Person = ({ id, name, removeItem }) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  )
}

export default Person
