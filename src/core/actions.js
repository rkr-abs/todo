import addTodo from '../services/addTodo';

const setInput = (context) => ({
	input: context.data,
});
const setTodo = (context) => ({
	todos: addTodo(context),
});
const actions = { setInput, setTodo };

export default actions;
