import types from './types'

const addModalReducer = (isOpen = false, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL: {
      const { payload } = action
      return payload
    }

    default: return isOpen

  }

}

export default addModalReducer