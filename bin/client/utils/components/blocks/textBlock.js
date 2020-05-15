import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

/* components */
import AddBlockButtonComponent from './actionButtons/addBlockButton'
import AlignBlockButtonsComponent from './actionButtons/alignBlockButtons'
import RemoveBlockButtonComponent from './actionButtons/removeBlockButton'

/* actions */
import { editPage } from '@/_home/ducks/actions'

/* styles */
import './index.css'


function TextBlock (props) {

    const { pageId, blockItem, editPage } = props

    if (!pageId || !blockItem || !blockItem.content) return <Redirect to="/not-found"/>

    const { id } = blockItem
    const { text, textAlign, fontSize } = blockItem.content

    return (<div className="block-container">
      <div className="block-content" contentEditable="true" suppressContentEditableWarning={true}
                 onBlur={e => {
                   editPage(pageId, {
                     id,
                     content: {
                       text: e.currentTarget.textContent
                     }
                   })
                 }}
                 style={{
      ...(textAlign && {
        textAlign
      }),
      ...(fontSize && {
        fontSize
      })
    }}>{text}
    </div>
    <AddBlockButtonComponent pageId={pageId} blockId={id} />
    <AlignBlockButtonsComponent pageId={pageId} blockId={id} />
    <RemoveBlockButtonComponent pageId={pageId} blockId={id} />
    </div>)

}

TextBlock.propTypes = {
  pageId: PropTypes.string,
  blockItem: PropTypes.object
}

export default connect(null , { editPage })(TextBlock)

