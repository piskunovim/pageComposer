import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { BsCardImage } from 'react-icons/bs'

/* components */
import AddBlockButtonComponent from './actionButtons/addBlockButton'
import RemoveBlockButtonComponent from './actionButtons/removeBlockButton'
import ImageModalComponent from '@/utils/components/modals/imageModal'

/* actions */
import { toggleModal } from '@/utils/components/modals/imageModal/ducks/actions'


function ImageBlock(props) {

  console.log('props', props)

  const { pageId, blockItem, toggleModal } = props

  if (!pageId || !blockItem || !blockItem.content) return <Redirect to="/not-found"/>

  console.log('blockItem', blockItem)
  const { id } = blockItem
  const { url } = blockItem.content

  const imgBlock = url ? (<div className="img-block cursor-pointer" style={{ backgroundImage: `url(${url})` }} />) : (<div className="img-block-none text-center cursor-pointer"><BsCardImage size={50}/></div>)

  return <div className="block-container">
    <div className="block-content" onClick={() => toggleModal(true, url)}>
      {imgBlock}
    </div>
    <ImageModalComponent pageId={pageId} blockId={id} url={url} />
    <AddBlockButtonComponent pageId={pageId} blockId={id} />
    <RemoveBlockButtonComponent pageId={pageId} blockId={id} />
  </div>
}

ImageBlock.propTypes = {
  pageId: PropTypes.string,
  blockItem: PropTypes.object
}

export default connect(null, { toggleModal })(ImageBlock)