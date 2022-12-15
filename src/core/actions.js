import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	todoInput: context.data,
});

const deleteTodo = (context) => ({
	todos: TodoManager.deleteTodo(context),
});

const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	todoInput: '',
});
const actions = { setInput, addTodo, deleteTodo };

export default actions;
