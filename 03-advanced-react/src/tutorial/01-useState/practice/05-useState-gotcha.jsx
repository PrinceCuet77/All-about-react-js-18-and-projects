import { useState } from 'react'

const UseStateGotcha = () => {
    const [value, setValue] = useState(0)

    const handleValue = () => {
        // setValue(value + 1)

        // setValue((currentState) => {
        //     const newState = currentState + 1
        //     return newState
        // })
        // console.log(value)

        setTimeout(() => {
            setValue((currentState) => {
                return currentState + 1
            })
        }, 3000)
    }

    return (
        <>
            <h2>useState "gotcha"</h2>
            <h3>{value}</h3>
            <button type='button' className='btn' onClick={handleValue}>
                increase
            </button>
        </>
    )
}

export default UseStateGotcha
