import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../component/TodoList'

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
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}
const mapDispatchToProps = displatch => {
	return {
		onTodoClick: id=> {
			dispatch(toggleTodo(id))
		}
	}
}



import { connect } from 'react-redux'

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Todolist)

export default VisibleTodoList




