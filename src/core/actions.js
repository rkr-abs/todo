import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	input: context.data,
});
const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	input: '',
});
const actions = { setInput, addTodo };

export default actions;
