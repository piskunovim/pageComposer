import React from 'react'
import { connect } from 'react-redux'
import toast from 'cogo-toast'

/* actions */
import { addPage } from '@/_home/ducks/actions'
import { toggleModal } from './ducks/actions'

/* styles */
import './index.css'

function AddPageModalComponent (props) {
  const { addModalIsOpen, addPage, toggleModal } = props

  return (<div className="modal" style={addModalIsOpen ? { display: 'block' } : { display: 'none' }}>

    <div className="modal-content">
      <span className="close" onClick={()=>{
        document.querySelector('.modal-form').reset()
        toggleModal(false)
      }}>&times;</span>
      <form className="modal-form" onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.target)

        const title = data.get('title') ? data.get('title').trim() : null

        if(!title){
          return toast.error("Sorry, but title cannot be empty!", { position: 'top-right'})
        }

        addPage({ title })
        toggleModal(false)

        event.target.reset()
      }}>
        <label>
          New Page Title:
        </label>
        <input type="text" name="title" placeholder="Example page" required/>
        <div className="modal-actions">
          <button className="btn-primary" type="submit">Submit</button>
          <button className="btn-light" type="button" onClick={()=>{
            document.querySelector('.modal-form').reset()
            toggleModal(false)
          }}>Cancel</button>
        </div>
      </form>
    </div>

  </div>)
}

const mapStateToProps = (state) => {
  return { addModalIsOpen: state.addModalIsOpen }
}

export default connect( mapStateToProps, { addPage, toggleModal })(AddPageModalComponent)