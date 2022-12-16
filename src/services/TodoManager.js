import { filter } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const eight = 8;
const two = 2;

const getTodo = ({ todoInput }) => ({
	id: rndString(eight),
	name: todoInput,
});

const deleteTodo = ({ state: { todos }, data: { id }}) =>
	filter(todos, (todo) => todo.id !== id);

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const getTodos = ({ state }) =>
	(state.value === two
		? filter(state.todos, (todo) => todo.isActive !== true)
		: state.value === 1
			? filter(state.todos, (todo) => todo.isActive === true)
			: state.todos);

const TodoManager = {
	addTodo,
	deleteTodo,
	getTodos,
};

export default TodoManager;
