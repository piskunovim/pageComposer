import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai'

/* actions */
import { deletePage } from '@/_home/ducks/actions'
import { toggleModal } from '@/utils/components/modals/addPageModal/ducks/actions'

/* styles */
import "./index.css"

/* components */
import AddPageModalComponent from '@/utils/components/modals/addPageModal'

function HomeComponent (props){
  const { pages } = props.pagesListObject
  const { toggleModal, deletePage } = props
  return (<div className="home-pages-thumbnail-container">
    {pages.map(page => (<div key={page.id} className="home-pages-thumbnail cursor-pointer">
        <Link to={`/page/${page.id}`} className="link-inherit">
          <div className="page-title">{page.title}</div>
        </Link>
        <span className="page-remove-icon" onClick={() => deletePage(page)}>
          <AiFillCloseCircle size={20} />
        </span>
    </div>)
    )}
    <div className="home-pages-thumbnail text-center cursor-pointer" onClick={()=>toggleModal(true)}>
      <div className="page-add-icon"/>
    </div>
    <AddPageModalComponent />
  </div>)
}

const mapStateToProps = (state) => {
  return { pagesListObject: state.pagesListObject }
}

export default connect(mapStateToProps, { deletePage, toggleModal })(HomeComponent)