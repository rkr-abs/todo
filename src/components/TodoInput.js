import { React } from 'react';
import { TextField } from '@mui/material';

const TodoInput = ({ actions, state }) =>
	<TextField { ...{
		placeholder: 'Add task...',
		onChange: (evt) => actions.setInput(evt.target.value.trimStart()),
		value: state.todoInput,
		label: 'TO-DO :)',
	} }
	/>;

export default TodoInput;
