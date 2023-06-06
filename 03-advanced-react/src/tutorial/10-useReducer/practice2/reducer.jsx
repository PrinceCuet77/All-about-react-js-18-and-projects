import { ADD_ITEM, REMOVE_ITEM, EMPTY_ITEM, CLOSE_MODAL } from './action'

export const recuder = (state, action) => {
  if (action.type === ADD_ITEM) {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item is added',
    }
  }

  if (action.type === EMPTY_ITEM) {
    return { ...state, isModalOpen: true, modalContent: 'Please, add item' }
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item is removed',
    }
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false }
  }

  throw new Error('no match action type')
}
