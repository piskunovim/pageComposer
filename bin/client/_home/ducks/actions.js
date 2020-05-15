import types from './types'

export const addPage = (page) => {
  return {
    type: types.ADD_PAGE,
    payload: page
  }
}

export const editPage = (pageId, block) => {
  return {
    type: types.EDIT_PAGE,
    payload: {
      pageId,
      block
    }
  }
}

export  const deletePage = (page) => {
  return {
    type: types.DELETE_PAGE,
    payload: page
  }
}