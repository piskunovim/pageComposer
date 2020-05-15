import React from 'react'
import { connect } from 'react-redux'
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from 'react-icons/ai'
import PropTypes from 'prop-types'

/* actions */
import { editPage } from '@/_home/ducks/actions'

function AlignBlockButtonsComponent (props) {

  const { pageId, blockId, editPage } = props

  return (<div className="align-block-container">
    <span className="link"><AiOutlineAlignLeft size={26} className="cursor-pointer" onClick={()=> editPage(pageId, { id: blockId, content: { textAlign: 'left' } })}/></span>
    <span className="link"><AiOutlineAlignCenter size={26} className="cursor-pointer" onClick={()=> editPage(pageId, { id: blockId, content: { textAlign: 'center' } })}/></span>
    <span className="link"><AiOutlineAlignRight size={26} className="cursor-pointer" onClick={()=> editPage(pageId, { id: blockId, content: { textAlign: 'right' } })}/></span>
  </div>)
}

AlignBlockButtonsComponent.propTypes = {
  pageId: PropTypes.string,
  blockId: PropTypes.string
}

export default connect(null, { editPage })(AlignBlockButtonsComponent)