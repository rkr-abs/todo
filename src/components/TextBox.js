import { TextField } from '@mui/material';
import { React } from 'react';

const TextBox = ({ actions }) =>
	<TextField
		placeholder="Add task..."
		onChange={
			(evt) => actions.setInput(evt.target.value)
		}
		label="TO-DO :)"
	/>;

export default TextBox;
