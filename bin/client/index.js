import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

/* styles */
import '@/index.css'

/* app components */
import HomeComponent from '@/_home'
import PageEditorComponent from '@/_pageEditor'
import NotFoundComponent from '@/_notFound'

import rootReducer from '@/rootReducer'

class App extends Component {
    render () {
        return (
          <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <Router>
                <header>
                    <Link to="/" className="link" title="Home">
                        <FaHome size={30}/>
                    </Link>
                </header>
                <Switch>
                    <Route path="/" exact component={HomeComponent} />
                    <Route path="/page/:id" exact component={PageEditorComponent} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </Router>
          </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app-init')
)