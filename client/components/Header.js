import classNames from 'classnames'
import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  static get propTypes() {
    return {
      todos: React.PropTypes.object
    }
  }

  render() {
    const { todos } = this.props
    const menuClassName = classNames(
      'row',
      'todo__header__menu',
      { 'todo__header__menu--no-tasks': todos.size < 1 }
    )
    const buttonClassName = classNames(
      'todo__check-btn',
      'todo__check-btn--all',
      { 'todo__check-btn--checked': todos.every(todo => todo.completed) },
      { 'todo__header__menu__check-btn--no-tasks': todos.size < 1 }
    )
    const textInputClassName = classNames(
      'todo__text-input',
      'todo__text-input--add',
      { 'todo__header__menu__text-input--no-tasks': todos.size < 1 }
    )

    return (
      <header className="todo__header">
        <h1 className="todo__header__title">todos</h1>
        <div className={menuClassName}>
          <div className="row__cell row__cell--sub">
            <button
              className={buttonClassName}
              onClick={TodoActions.toggleCompleteAll}
            >&#10004;</button>
          </div>
          <div className="row__cell row__cell--main">
            <TodoTextInput
              className={textInputClassName}
              onSave={TodoActions.add}
              placeholder="What needs to be done?"
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
