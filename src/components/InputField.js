import { React } from 'react';
import { Box } from '@mui/material';
import TodoInput from './TodoInput';
import ActionButton from './ActionButton';

const InputField = (context) =>
	<Box { ...{ sx: {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	}} }
	>
		<TodoInput { ...context }/>
		<ActionButton { ...context }/>
	</Box>;

export default InputField;
