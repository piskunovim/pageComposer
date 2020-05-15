import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

/* components */
import TextBlock from '@/utils/components/blocks/textBlock'
import ImageBlock from '@/utils/components/blocks/imageBlock'
import AddBlockButtonComponent from '@/utils/components/blocks/actionButtons/addBlockButton'

/* constants */
import blockTypes from '@/utils/constants/blockTypes'

/* styles */
import './index.css'

function PageEditorComponent (props) {
  const { page } = props

  console.log('page', page)
  if(!page){
    return <Redirect to="/not-found"/>
  }
  return (<div className="page-editor-container">
    <div className="page-editor-title">Page: {page.title}</div>
    <div className="page-editor-content">
      {(!page.blocks || page.blocks.length === 0) && <AddBlockButtonComponent pageId={page.id} isDefault={true} />}

      {page.blocks && page.blocks.map(block => {
        switch (block.type) {
          case blockTypes.TEXT: {
            return <TextBlock key={block.id} blockItem={Object.assign({}, block)} pageId={page.id} />
          }

          case blockTypes.IMAGE: {
            console.log('render image block')
            return <ImageBlock key={block.id} blockItem={Object.assign({}, block)} pageId={page.id} />
          }

          default: return
        }
      })}
    </div>
  </div>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    page: Array.isArray(state.pagesListObject.pages) ? Object.assign({}, state.pagesListObject.pages.find(page => page.id === ownProps.match.params.id)) : null
  }
}

export default connect(mapStateToProps)(PageEditorComponent)
