import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	todoInput: context.data,
});

const changeStatus = (context) => ({
	todos: TodoManager.changeStatus(context),
	isActive: context.data.isActive,
});

const selectAllTodos = (context) => ({
	todos: TodoManager.selectAllTodos(context),
});

const toggleTab = (context) => ({
	tabValue: context.data,
});

const deleteTodo = (context) => ({
	todos: TodoManager.deleteTodo(context),
});

const clearCompletedTodos = (context) => ({
	todos: TodoManager.clearCompletedTodos(context),
});

const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	todoInput: '',
});

const actions = {
	setInput,
	addTodo,
	deleteTodo,
	toggleTab,
	changeStatus,
	clearCompletedTodos,
	selectAllTodos,
};

export default actions;
