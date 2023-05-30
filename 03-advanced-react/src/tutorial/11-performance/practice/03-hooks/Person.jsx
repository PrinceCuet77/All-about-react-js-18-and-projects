const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)} className='btn'>
        remove
      </button>
    </div>
  )
}
export default Person
