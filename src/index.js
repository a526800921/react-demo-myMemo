import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {Route, BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
   <Provider store={store}>
   <Router>
      <Route path='/' component={App}></Route>
   </Router>
</Provider>, document.getElementById('root'))
registerServiceWorker()
