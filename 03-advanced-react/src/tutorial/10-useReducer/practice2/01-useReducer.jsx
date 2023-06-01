import { useState } from 'react'
import Modal from './Modal'
import Person from './Person'

const ReducerBasics = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name }
      setPeople([...people, newPeople])

      setShowModal(true)
      setModalContent(name + ' is added')
      setName('')
    } else {
      setShowModal(true)
      setModalContent('Please, add item')
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id))
    setShowModal(true)
    const item = people.find((person) => person.id === id)
    setModalContent(`${item.name} is deleted`)
  }

  return (
    <section>
      {showModal && (
        <Modal modalContent={modalContent} closeModal={closeModal} />
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

      {people.map((person) => {
        return <Person key={person.id} {...person} removeItem={removeItem} />
      })}
    </section>
  )
}

export default ReducerBasics
