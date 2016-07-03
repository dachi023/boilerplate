import classNames from 'classnames'
import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'

class Footer extends Component {
  static get propTypes() {
    return {
      todos: React.PropTypes.object
    }
  }

  render() {
    const { todos } = this.props

    if (todos.size < 1) {
      return null
    }

    const completedTodos = todos.filter(todo => todo.completed)
    const buttonClassName = classNames(
      'todo__footer__right__clear-completed',
      { 'todo__footer__right__clear-completed--active': completedTodos.size > 0 }
    )

    return (
      <footer className="row todo__footer">
        <div className="row__cell row__cell--half todo__footer__left">
          <strong className="todo__footer__left__completed-count">
            {completedTodos.size}
          </strong>
          {completedTodos.size === 1 ? ' item left' : ' items left'}
        </div>
        <div className="row__cell row__cell--half todo__footer__right">
          <button
            className={buttonClassName}
            onClick={TodoActions.deleteCompletedAll}
          >Clear completed ({completedTodos.size})</button>
        </div>
      </footer>
    )
  }
}

export default Footer
