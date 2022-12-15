import { TextField } from '@mui/material';
import { React } from 'react';

const props = ({ actions, state }) => ({
	placeholder: 'Add task...',
	onChange: (evt) => actions.setInput(evt.target.value.trimStart()),
	value: state.todoInput,
	label: 'TO-DO :)',
});

const TodoInput = (context) =>
	<TextField { ...props(context) }/>;

export default TodoInput;
