import { TextField, Button, Box } from '@mui/material';
import { React } from 'react';

const InputField = ({ actions, state }) =>
	<Box sx={ {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	} }
	>
		To-Do:
		<TextField
			placeholder="Add task..."
			onChange={
				(evt) => actions.disable(evt.target.value)
			}
		/>
		<Button
			variant="contained"
			disabled={ state.disable }
			onClick={ () => actions.addValue() }
		> Add </Button>
	</Box>;

export default InputField;
