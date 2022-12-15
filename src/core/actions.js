import TodoManager from '../services/TodoManager';

const setInput = (context) => ({
	todoInput: context.data,
});
const deleteTodo = (context) => ({

});
const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	todoInput: '',
});
const actions = { setInput, addTodo };

export default actions;
