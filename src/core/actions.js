import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	todoInput: context.data,
});
const isChecked = (context) => ({
	completeTodos: TodoManager.completedTodos(context),
});
const toggleMenu = (context) => ({
	value: String(context.data),
});
const deleteTodo = (context) => ({
	todos: TodoManager.deleteTodo(context),
});

const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	todoInput: '',
});
const actions = { setInput, addTodo, deleteTodo, toggleMenu, isChecked };

export default actions;
