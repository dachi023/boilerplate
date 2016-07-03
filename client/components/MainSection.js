import React, { Component } from 'react'
import TodoItem from './TodoItem'

class MainSection extends Component {
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

    const items = todos.toArray()

    return (
      <section className="todo__main">
        <ul className="todo__main__list">
          {items.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </section>
    )
  }
}

export default MainSection
