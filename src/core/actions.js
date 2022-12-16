import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	todoInput: context.data,
});
const setStatus = (context) => ({
	todos: TodoManager.setStatus(context),
});

const toggleMenu = (context) => ({
	value: context.data,
});
const deleteTodo = (context) => ({
	todos: TodoManager.deleteTodo(context),
});

const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	todoInput: '',
});
const actions = {
	setInput,
	addTodo,
	deleteTodo,
	toggleMenu,
	setStatus,
};

export default actions;
