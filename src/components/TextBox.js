import { TextField } from '@mui/material';
import { React } from 'react';

const TextBox = ({ actions, state }) =>
	<TextField
		placeholder="Add task..."
		onChange={
			(evt) => actions.setInput(evt.target.value.trimStart())
		}
		value={ state.input }
		label="TO-DO :)"
	/>;

export default TextBox;
