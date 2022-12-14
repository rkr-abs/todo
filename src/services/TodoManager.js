import { rndString } from '@laufire/utils/random';

const eight = 8;

const todo = ({ input }) => ({
	id: rndString(eight),
	name: input,
});

const addTodo = ({ state }) =>
	[...state.todos, todo(state)];

const TodoManager = {
	addTodo,
};

export default TodoManager;
