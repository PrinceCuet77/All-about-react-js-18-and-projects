import { data, people } from '../../../data'
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action'

// Note: Reducer function
// Takes two parameters. 1. state (before update) & 2. action (object & property is 'type' - what I'm trying to do)
// And return the state value
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
    // 1. '...state' - copy the content of 'state'
    // 2. 'people: []' - update the content of 'state'
    // 3. '{}' - after that wrap using object, creating a new state object and return to 'useReducer' hook
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    )
    return { ...state, people: newPeople }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer
