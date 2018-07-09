import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<addTodo />
		<VisibleTodoList />
		<Footer />
	</div>
	)

	export default App