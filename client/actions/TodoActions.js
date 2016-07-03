import { dispatch } from '../dispatcher/AppDispatcher'

const actions = {
  add: text => {
    return dispatch({ type: 'todo/add', text })
  },
  clearComplete: id => {
    return dispatch({ type: 'todo/clear_complete', id })
  },
  complete: id => {
    return dispatch({ type: 'todo/complete', id })
  },
  delete: id => {
    return dispatch({ type: 'todo/delete', id })
  },
  deleteCompletedAll: () => {
    return dispatch({ type: 'todo/delete_completed_all' })
  },
  edit: (id, text) => {
    return dispatch({ type: 'todo/edit', id, text })
  },
  toggleCompleteAll: () => {
    return dispatch({ type: 'todo/toggle_complete_all' })
  }
}

export default actions
