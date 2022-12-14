import { Box } from '@mui/material';
import { React } from 'react';
import AddButton from './AddButton';
import InputText from './InputText';

const InputField = (context) =>
	<Box sx={ {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	} }
	>
		To-Do:
		<InputText { ...context }/>
		<AddButton { ...context }/>
	</Box>;

export default InputField;
