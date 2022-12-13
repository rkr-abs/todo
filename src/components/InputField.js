import { TextField, Button, Box } from '@mui/material';
import { React } from 'react';

const InputField = () =>
	<Box sx={ {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	} }
	>
		To-Do:
		<TextField placeholder="Add task..."/>
		<Button variant="contained" disabled={ true }> Add </Button>
	</Box>;

export default InputField;
