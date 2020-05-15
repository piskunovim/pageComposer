import React from 'react'
import { connect } from 'react-redux'
import { AiFillPlusCircle } from 'react-icons/ai'
import PropTypes from 'prop-types'

import convertFirstLetterToUpperCase from '@/utils/functions/convertFirstLetterToUpperCase'

/* actions */
import { editPage } from '@/_home/ducks/actions'

/* constants */
import blockTypes from '@/utils/constants/blockTypes'

function AddBlockButtonComponent (props) {

  const { pageId, blockId, editPage, isDefault } = props

  return (<div className={isDefault ? "add-block-dropdown-static" : "add-block-dropdown"}>
    <AiFillPlusCircle size={26} className="cursor-pointer"/>
    <div className={isDefault ? "add-block-dropdown-content-static" : "add-block-dropdown-content"}>
      {Object.entries(blockTypes).map(([type,value]) => {
        return (<p key={type.toLowerCase()} onClick={()=>{

          const defaultContent = value === "text" ? { text: "New Text Block" } : { url: "" }

          editPage(pageId, { type: value, content: defaultContent, ...(blockId && { prevBlock: blockId }) } )
        }}>
          {`Add ${convertFirstLetterToUpperCase(value)} Block`}
        </p>)
      })}
    </div>
  </div>)
}

AddBlockButtonComponent.propTypes = {
  pageId: PropTypes.string,
  blockId: PropTypes.string,
  isDefault: PropTypes.bool
}

export default connect(null, { editPage })(AddBlockButtonComponent)