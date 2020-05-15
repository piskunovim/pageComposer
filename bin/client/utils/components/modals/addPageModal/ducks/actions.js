import types from './types'

export const toggleModal = (isOpen) => {
  return {
    type: types.TOGGLE_MODAL,
    payload: isOpen
  }
}