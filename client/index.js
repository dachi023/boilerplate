import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import TodoApp from './containers/TodoApp'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={TodoApp}>
    </Route>
  </Router>,
  document.getElementById('root')
)
