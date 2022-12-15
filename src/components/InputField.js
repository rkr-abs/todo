import { Box } from '@mui/material';
import { React } from 'react';
import AddTodo from './AddTodo';
import TodoInput from './TodoInput';

const InputField = (context) =>
	<Box sx={ {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	} }
	>
		<TodoInput { ...context }/>
		<AddTodo { ...context }/>
	</Box>;

export default InputField;
