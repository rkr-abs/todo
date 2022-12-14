
const disable = (context) => ({
	disable: context.data === '',
	input: context.data,
});
const addValue = ({ state }) => ({
	inputValues: [...state.inputValues, state.input],
});
const actions = { disable, addValue };

export default actions;
