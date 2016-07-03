import Immutable from 'Immutable'

const TodoRecord = Immutable.Record({
  id: null,
  completed: null,
  text: null,
})

class Todo extends TodoRecord {
  constructor(text) {
    super({
      id: Date.now() + Math.round(Math.random() * 1000),
      completed: false,
      text,
    })
  }
}

export default Todo
