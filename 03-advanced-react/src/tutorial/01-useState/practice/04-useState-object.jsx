import { useState } from 'react'

const UseStateObject = () => {
    // const [name, setName] = useState('Prince')
    // const [age, setAge] = useState(24)
    // const [hobby, setHobby] = useState('Coding')

    const [person, setPerson] = useState({
        name: 'Prince',
        age: 24,
        hobby: 'coding',
    })

    const displayObject = () => {
        // setName('John')
        // setAge(28)
        // setHobby('scream at the computer')

        // If I need to preserve the old value then,
        // setPerson({ ...person, name: 'susan' })

        setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' })
    }

    return (
        <div>
            <h4>{person.name}</h4>
            <h4>{person.age}</h4>
            <h4>Enjoys: {person.hobby}</h4>

            <button type='button' className='btn' onClick={displayObject}>
                show john
            </button>
        </div>
    )
}

export default UseStateObject
