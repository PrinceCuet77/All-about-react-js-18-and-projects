import { useState } from 'react'
import { data } from '../../../data'
import Person from './Person'
import Modal from './Modal'

const ReducerBasics = () => {
  const [people, setPeople] = useState([])
  const [name, setName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name }
      setPeople([...people, newPeople])
      setName('')

      setShowModal(true)
      setModalContent('Item added')
    } else {
      setShowModal(true)
      setModalContent('Please add item')
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <section>
      {showModal && <Modal content={modalContent} closeModal={closeModal} />}
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
      <div>
        {people.map((person) => {
          return <Person key={person.id} {...person} />
        })}
      </div>
    </section>
  )
}

export default ReducerBasics
