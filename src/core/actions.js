import { rndString } from '@laufire/utils/random';

const input = (context) => ({
	input: context.data,
});
// eslint-disable-next-line no-magic-numbers
const id = rndString(8);
const addValue = ({ state }) => ({
	todos: [...state.todos, { id: id, name: state.input }],
});
const actions = { input, addValue };

export default actions;
