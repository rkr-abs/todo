import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	todoInput: context.data,
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
const actions = { setInput, addTodo, deleteTodo, toggleMenu };

export default actions;
