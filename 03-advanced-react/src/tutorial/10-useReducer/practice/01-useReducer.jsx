import { useState, useReducer } from 'react'
import { data, people } from '../../../data'

import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action'
import reducer from './reducer'

// Note: Default state (object in this case) contains 'people' property
const defaultState = {
  people: data,
}

const ReducerBasics = () => {
  // Note: useReducer hook takes two things. 1. 'reducer' function (manipulate state) & 2. Default state
  // And return, 1. state (whole state) & 2. dispatch (updating the state using taking 'action')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // Note: Convension is to pass the extra value inside dispatch() function is using 'payload' property which is an object and what I am trying to pass is its property
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearList = () => {
    // Note: Convension is to use capital letter
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length === 0 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
