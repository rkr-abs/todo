import { filter } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const eight = 8;

const getTodo = ({ todoInput }) => ({
	id: rndString(eight),
	name: todoInput,
});

const deleteTodo = ({ state: { todos }, data: { id }}) =>
	filter(todos, (todo) => todo.id !== id);

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const CompletedTodos = (todos) =>
	filter(todos, (todo) => todo.status === 'completed');

const TodoManager = {
	addTodo,
	deleteTodo,
	CompletedTodos,
};

export default TodoManager;
