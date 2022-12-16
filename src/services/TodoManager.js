import { filter, map } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const eight = 8;
const two = 2;

const getTodo = ({ todoInput }) => ({
	id: rndString(eight),
	name: todoInput,
	isActive: true,
});

const deleteTodo = ({ state: { todos }, data: { id }}) =>
	filter(todos, (todo) => todo.id !== id);

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const filterTodo = ({ state }) =>
	(state.tabValue === two
		? filter(state.todos, (todo) => todo.isActive !== true)
		: state.tabValue === 1
			? filter(state.todos, (todo) => todo.isActive === true)
			: state.todos);

const changeStatus = ({ state, data }) =>
	map(state.todos, (todo) =>
		(todo.id === data.id
			? { ...todo, isActive: !data.isActive }
			: todo));

const TodoManager = {
	addTodo,
	deleteTodo,
	filterTodo,
	changeStatus,
};

export default TodoManager;
