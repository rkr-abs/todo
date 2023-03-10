import { filter, map } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const idLength = 8;

const isInputEmpty = ({ state: { todoInput }}) => todoInput === '';

const getTodo = ({ todoInput }) => ({
	id: rndString(idLength),
	name: todoInput,
	isActive: true,
});

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const deleteTodo = ({ state: { todos }, data: { id }}) =>
	filter(todos, (todo) => todo.id !== id);

const clearCompletedTodos = ({ state: { todos }}) =>
	filter(todos, (todo) => todo.isActive);

const filterTodo = {
	0: (todos) => todos,
	1: (todos) => filter(todos, (todo) => todo.isActive),
	2: (todos) => filter(todos, (todo) => !todo.isActive),
};

const changeStatus = ({ state: { todos }, data }) =>
	map(todos, (todo) =>
		(todo.id === data.id
			? { ...todo, isActive: !data.isActive }
			: todo));

const selectAllTodos = ({ state: { todos }, data }) =>
	map(todos, (todo) => ({ ...todo, isActive: !data }));

const isAllTodoSelected = ({ state: { todos }}) =>
	todos.every((todo) => !todo.isActive);

const updateTodo = ({ state: { todos, editedTodo, todoInput }}) =>
	map(todos, (todo) => (editedTodo.id === todo.id
		? { ...todo, name: todoInput }
		: todo
	));

const TodoManager = {
	isInputEmpty,
	addTodo,
	deleteTodo,
	filterTodo,
	changeStatus,
	clearCompletedTodos,
	selectAllTodos,
	isAllTodoSelected,
	updateTodo,
};

export default TodoManager;
