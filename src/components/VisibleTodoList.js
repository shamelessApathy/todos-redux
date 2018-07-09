const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t=> t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t=> !t.completed)
		case 'SHOW_ALL':
		default:
		return todos
	}
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

import { connect } from 'react-redux'

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Todolist)

export default VisihbleTodoList


mapDispatchToProps = displatch => {
	return {
		onTodoClick: id=> {
			dispatch(toggleTodo(id))
		}
	}
}

