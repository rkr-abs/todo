import { rndString } from '@laufire/utils/random';

const eight = 8;
const id = rndString(eight);
const todo = ({ input }) => ({
	id: id,
	name: input,
});

const addTodo = ({ state }) =>
	[...state.todos, todo(state)];

export default addTodo;
