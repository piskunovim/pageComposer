import types from './types'

export const toggleModal = (isOpen, url) => {
  return {
    type: types.TOGGLE_IMAGE_MODAL,
    payload: { isOpen, url }
  }
}