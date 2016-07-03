import { Container } from 'flux/utils'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import React, { Component } from 'react'
import TodoStore from '../store/TodoStore'

class TodoApp extends Component {
  static getStores() {
    return [TodoStore]
  }

  static calculateState() {
    return {
      todos: TodoStore.getState()
    }
  }

  static get propTypes() {
    return {
      children: React.PropTypes.node
    }
  }

  render() {
    return (
      <div className="todo">
        <Header todos={this.state.todos} />
        <MainSection todos={this.state.todos} />
        {this.props.children}
        <Footer todos={this.state.todos} />
      </div>
    )
  }
}

const TodoAppContainer = Container.create(TodoApp)
export default TodoAppContainer
