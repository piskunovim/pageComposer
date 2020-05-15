import types from './types'

export const imageModalReducer = (isOpen = false, action) => {
  switch (action.type) {
    case types.TOGGLE_IMAGE_MODAL: {
      const { isOpen: newIsOpenState } = action.payload
      return typeof newIsOpenState  !== 'undefined' ? newIsOpenState : isOpen
    }

    default: return isOpen

  }

}

export const imageModalUrlReducer = (url = "", action) => {
  switch (action.type) {
    case types.TOGGLE_IMAGE_MODAL: {
      const { url: newUrl } = action.payload
      return typeof newUrl !== 'undefined' ? newUrl : ""
    }

    default: return url

  }
}