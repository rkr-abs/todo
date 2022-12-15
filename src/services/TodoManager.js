import { rndString } from '@laufire/utils/random';

const eight = 8;

const getTodo = ({ todoInput }) => ({
	id: rndString(eight),
	name: todoInput,
});

const addTodo = ({ state }) =>
	[...state.todos, getTodo(state)];

const TodoManager = {
	addTodo,
};

export default TodoManager;
