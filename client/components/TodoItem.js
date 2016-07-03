import classNames from 'classnames'
import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
  static get propTypes() {
    return {
      todo: React.PropTypes.object
    }
  }

  constructor(props, context) {
    super(props, context)
    this.state = { isEditing: false }
  }

  handleChange() {
    const { todo } = this.props
    if (todo.completed) {
      return TodoActions.clearComplete(todo.id)
    }
    TodoActions.complete(todo.id)
  }

  handleClick() {
    const { todo } = this.props
    TodoActions.delete(todo.id)
  }

  handleDoubleClick() {
    this.setState({ isEditing: true })
  }

  onSave(value) {
    const { todo } = this.props
    TodoActions.edit(todo.id, value)
    this.setState({ isEditing: false })
  }
  
  render() {
    const { todo } = this.props
    const checkButtonClassName = classNames(
      'todo__check-btn',
      { 'todo__check-btn--checked': todo.completed },
      'todo__main__list__item__toggle-complete'
    )
    const mainElement = this.state.isEditing
      ? <TodoTextInput
          className="todo__text-input todo__main__list__item__edit"
          onSave={this.onSave.bind(this)}
          value={todo.text}
        />
      : <label
          className="todo__main__list__item__label"
          onDoubleClick={this.handleDoubleClick.bind(this)}
        >{todo.text}</label>

    return (
      <li className="row todo__main__list__item">
        <div className="row__cell row__cell--sub">
          <button
            className={checkButtonClassName}
            onClick={this.handleChange.bind(this)}
          >&#10004;</button>
        </div>
        <div className="row__cell row__cell--main">
          {mainElement}
        </div>
        <div className="row__cell row__cell--sub">
          <button
            className="todo__del-btn todo__main__list__item__del"
            onClick={this.handleClick.bind(this)}
          >&#10006;</button>
        </div>
      </li>
    )
  }
}

export default TodoItem
