import { combineReducers } from 'redux'
import homeReducer  from '@/_home/ducks/reducers'
import addModalReducer from '@/utils/components/modals/addPageModal/ducks/reducers'
import { imageModalReducer, imageModalUrlReducer } from '@/utils/components/modals/imageModal/ducks/reducers'

const rootReducer = combineReducers({
  pagesListObject: homeReducer,
  addModalIsOpen: addModalReducer,
  imageModalIsOpen: imageModalReducer,
  imageModalUrl: imageModalUrlReducer
})

export default rootReducer