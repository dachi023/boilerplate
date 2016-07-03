import AppDispatcher from '../dispatcher/AppDispatcher'
import Immutable from 'Immutable'
import { ReduceStore } from 'flux/utils'
import Todo from './records/Todo'

class TodoStore extends ReduceStore {
  getInitialState() {
    return Immutable.OrderedMap()
  }

  createTodo(state, text) {
    if (!text) {
      return state
    }
    const todo = new Todo(text)
    return state.set(todo.id, todo)
  }

  toggleCompletedAll(state) {
    const completed = state.every(todo => todo.completed)
    return state.map(todo => todo.set('completed', !completed))
  }

  reduce(state, action) {
    switch (action.type) {
      case 'todo/add':
        return this.createTodo(state, action.text)

      case 'todo/clear_complete':
        return state.setIn([action.id, 'completed'], false)

      case 'todo/complete':
        return state.setIn([action.id, 'completed'], true)

      case 'todo/delete':
        return state.delete(action.id)

      case 'todo/delete_completed_all':
        return state.filter(todo => !todo.completed)

      case 'todo/edit':
        return state.setIn([action.id, 'text'], action.text)

      case 'todo/toggle_complete_all':
        return this.toggleCompletedAll(state)

      default:
        return state
    }
  }
}

const instance = new TodoStore(AppDispatcher)
export default instance
