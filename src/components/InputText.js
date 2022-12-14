import { TextField } from '@mui/material';
import { React } from 'react';

const InputText = ({ actions }) =>
	<TextField
		placeholder="Add task..."
		onChange={
			(evt) => actions.input(evt.target.value)
		}
	/>;

export default InputText;
