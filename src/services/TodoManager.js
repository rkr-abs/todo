import { filter } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';

const eight = 8;

const getTodo = ({ todoInput }) => ({
	id: rndString(eight),
	name: todoInput,
});
const completedTodo = (todos, id) =>
	filter(todos, (todo) => todo.id === id);

const deleteTodo = ({ state: { todos }, data: { id }}) =>
	filter(todos, (todo) => todo.id !== id);

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const completedTodos = ({ state: { completeTodos, todos }, data }) => {
	peek(...completedTodo(todos, data));
	return [...completeTodos, ...completedTodo(todos, data)];
};

const TodoManager = {
	addTodo,
	deleteTodo,
	completedTodos,
};

export default TodoManager;
