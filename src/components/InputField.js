import { TextField, Box } from '@mui/material';
import { React } from 'react';
import AddButton from './AddButton';

const InputField = (context) =>
	<Box sx={ {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	} }
	>
		To-Do:
		<TextField
			placeholder="Add task..."
			onChange={
				(evt) => context.actions.disable(evt.target.value)
			}
		/>
		<AddButton { ...context }/>
	</Box>;

export default InputField;
