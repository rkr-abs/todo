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

const updateTodo = (context) => ({
	todos: TodoManager.updateTodo(context),
	editedTodo: {},
	todoInput: '',
	todoButton: 'Add',
});

const editTodo = (context) => {
	const { data } = context;

	return {
		todoInput: data.name,
		todoButton: 'update',
		editedTodo: { ...data },
	};
};

const actions = {
	setInput,
	addTodo,
	deleteTodo,
	toggleTab,
	changeStatus,
	clearCompletedTodos,
	selectAllTodos,
	editTodo,
	updateTodo,
};

export default actions;
