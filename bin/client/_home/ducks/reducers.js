/* uuid is used only for demo purposes */
import { v4 as uuidv4 } from 'uuid'

/* types */
import types from './types'
import blockTypes from '@/utils/constants/blockTypes'

/* loremipsum for text blocks */
import loremIpsum from '@/utils/constants/loremIpsum'

/* FOR DEMO pagesListObj isn't isolated for components */
const DEFAULT_PAGES_LIST = {
  pages: [{
    id: '3c3d26d0-9c2a-487c-a21b-c83850a0a23b',
    title: 'Home Page',
    blocks: [{
      id: '87ca21b-c83850a0a23bsa-fds-g23423nds',
      type: blockTypes.IMAGE,
      content: {
        url: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed'
      }
    }, {
      id: '9c2a-487c-a21b-c83850a0a23b-fjs842323',
      type: blockTypes.TEXT,
      content: {
        text: loremIpsum,
        textAlign: 'left',
        fontSize: '20px'
      }
    }]
  }, {
    id: '9fa70cab-d111-487c-a98e-bb733eaa372a',
    title: 'About Us',
    blocks: [{
      id: '9a21b-c83850a0a23b-fjs84232332as-dsf',
      type: blockTypes.TEXT,
      content: {
        text: loremIpsum,
        textAlign: 'center',
        fontSize: '20px'
      }
    }]
  }, {
    id: '679fc6e7-9dd8-4772-915a-ad3958ab4fd5',
    title: 'Contacts'
  }],
  count: 3
}

const pagesReducer = (pagesListObj = DEFAULT_PAGES_LIST, action) => {
  switch(action.type){

    case types.ADD_PAGE: {
      const { payload: page } = action
      page.id = uuidv4() // only for demo
      const pages = [ ...pagesListObj.pages, page]
      return {
        pages,
        count: pages.length
      }
    }

    case types.EDIT_PAGE: {
      const { pageId, block } = action.payload
      console.log({ pageId, block })
      const updatedPages = pagesListObj.pages.map( page => {
        if(page.id === pageId) {
          if(block.id){
            if(block.remove){
              page.blocks = page.blocks.filter(existedBlock => existedBlock.id !== block.id)
            } else {
              page.blocks = page.blocks.map(existedBlock => {
                if (existedBlock.id === block.id) {
                  for (let key in block.content) {
                    existedBlock.content[key] = block.content[key]
                  }
                }
                return existedBlock
              })
            }
          } else {
            if(block.type && (block.type === blockTypes.TEXT || block.type === blockTypes.IMAGE)){
              const newBlock = {
                id: uuidv4(),
                type: block.type,
                content: block.content
              }
              if(block.prevBlock){
                const prevBlockIndex = page.blocks.findIndex(existedBlock => existedBlock.id === block.prevBlock)
                page.blocks.splice(prevBlockIndex+1, 0, newBlock)
              } else if (page.blocks) {
                page.blocks = [...page.blocks, newBlock]
              } else {
                page.blocks = [ newBlock ]
              }
            }
          }

        }
        return page
      })
      const pages = [...updatedPages]
      return {
        pages,
        count: updatedPages.length+1
      }

    }

    case types.DELETE_PAGE: {
      const { payload: page } = action
      const pages = pagesListObj.pages.filter( pageItem => pageItem.id !== page.id )
      return {
        pages,
        count: pages.length
      }
    }

    default: return pagesListObj
  }
}

export default pagesReducer