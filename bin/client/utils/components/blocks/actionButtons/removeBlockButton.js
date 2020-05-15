import React from 'react'
import { connect } from 'react-redux'
import { RiDeleteBinLine } from 'react-icons/ri'
import PropTypes from 'prop-types'

/* actions */
import { editPage } from '@/_home/ducks/actions'


function RemoveBlockButtonComponent (props) {

  const { pageId, blockId, editPage } = props

  return (<div className="remove-block-container">
    <span className="link"><RiDeleteBinLine size={26} className="cursor-pointer" onClick={()=> editPage(pageId, { id: blockId, remove: true })}/></span>
  </div>)
}

RemoveBlockButtonComponent.propTypes = {
  pageId: PropTypes.string,
  blockId: PropTypes.string
}

export default connect(null, { editPage })(RemoveBlockButtonComponent)