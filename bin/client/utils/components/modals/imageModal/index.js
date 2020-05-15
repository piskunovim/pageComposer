import React from 'react'
import { connect } from 'react-redux'
import toast from 'cogo-toast'

/* actions */
import { toggleModal } from './ducks/actions'
import { editPage } from '@/_home/ducks/actions'

/* styles */
import './index.css'
import PropTypes from 'prop-types'

function ImageModalComponent (props) {
  const { imageModalIsOpen, imageModalUrl, pageId, blockId, toggleModal, editPage } = props

  return (<div className="modal" style={imageModalIsOpen ? { display: 'block' } : { display: 'none' }}>

    <div className="modal-content">
      <span className="close" onClick={()=>{
        document.querySelector('.modal-form').reset()
        toggleModal(false)
      }}>&times;</span>
      <form className="modal-form" onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.target)

        const url = data.get('url') ? data.get('url').trim() : null

        console.log('url', url, pageId)

        if(!url){
          return toast.error("Sorry, but image url cannot be empty!", { position: 'top-right'})
        }

        editPage(pageId, {
          id: blockId,
          content: {
            url
          }
        })

        event.target.reset()
        toggleModal(false)
      }}>
        <label>
          Image Url:
        </label>
        <input type="text" name="url" placeholder="https://example.com/img" defaultValue={imageModalUrl || ""} required/>
        <div className="modal-actions">
          <button className="btn-primary" type="submit">Save</button>
          <button className="btn-light" type="button" onClick={()=>{
            document.querySelector('.modal-form').reset()
            toggleModal(false)
          }}>Cancel</button>
        </div>
      </form>
    </div>

  </div>)
}

ImageModalComponent.propTypes = {
  pageId: PropTypes.string,
  blockId: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    imageModalIsOpen: state.imageModalIsOpen,
    imageModalUrl: state.imageModalUrl
  }
}

export default connect( mapStateToProps, { editPage, toggleModal })(ImageModalComponent)