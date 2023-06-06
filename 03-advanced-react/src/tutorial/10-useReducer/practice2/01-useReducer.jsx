import { useReducer } from 'react'
import { useState } from 'react'
import Modal from './Modal'
import { recuder } from './reducer'
import { ADD_ITEM, REMOVE_ITEM, EMPTY_ITEM, CLOSE_MODAL } from './action'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const ReducerBasics = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(recuder, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name }
      setName('')
      dispatch({ type: ADD_ITEM, payload: newPeople })
    } else {
      dispatch({ type: EMPTY_ITEM })
    }
  }

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL })
  }

  return (
    <section>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn'>add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button
              onClick={() =>
                dispatch({ type: REMOVE_ITEM, payload: person.id })
              }
            >
              remove
            </button>
          </div>
        )
      })}
    </section>
  )
}

export default ReducerBasics
