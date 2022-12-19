import { filter, map } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const eight = 8;

const getTodo = ({ todoInput }) => ({
	id: rndString(eight),
	name: todoInput,
	isActive: true,
});

const isInputEmpty = ({ todoInput }) => todoInput === '';

const deleteTodo = ({ state: { todos }, data: { id }}) =>
	filter(todos, (todo) => todo.id !== id);

const clearCompletedTodos = ({ state: { todos }}) =>
	filter(todos, (todo) => todo.isActive !== false);

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const filterTodo = {
	0: (todos) => todos,
	1: (todos) => filter(todos, (todo) => todo.isActive === true),
	2: (todos) => filter(todos, (todo) => todo.isActive !== true),
};

const changeStatus = ({ state: { todos }, data }) =>
	map(todos, (todo) =>
		(todo.id === data.id
			? { ...todo, isActive: !data.isActive }
			: todo));

const TodoManager = {
	addTodo,
	deleteTodo,
	filterTodo,
	changeStatus,
	isInputEmpty,
	clearCompletedTodos,
};

export default TodoManager;
