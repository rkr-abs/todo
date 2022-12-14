
const disable = (context) => ({
	disable: context.data === '',
	input: context.data,
});
const addValue = ({ state }) => ({
	inputValue: [state.input],
});
const actions = { disable, addValue };

export default actions;
