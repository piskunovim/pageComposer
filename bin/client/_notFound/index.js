import React, { Fragment } from 'react'

import notFoundImg from './404-not-found.jpg'

/* styles */
import './index.css'

export default function NotFoundComponent () {
  return (<Fragment>
    <div className="not-found-container">
      <div className="not-found-title">
        404 - Ooops! Page Not Found!<br/>
        (please, keep note that this app doesn't store state after the page refresh)
      </div>
      <div className="not-found-img">
        <img src={notFoundImg} alt="404 Page Not Found"/>
      </div>
    </div>
  </Fragment>
  )
}