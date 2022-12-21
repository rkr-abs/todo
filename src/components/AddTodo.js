import { React } from 'react';
import { Box, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TodoManager from '../services/TodoManager';

const AddTodo = ({ actions, state }) => <Box>
	<Button
		{ ...{
			variant: 'contained',
			disabled: TodoManager.isInputEmpty(state),
			onClick: () => actions.addTodo(),
			sx: { margin: '2px', padding: '12px' },
		} }
	>
		<AddTaskIcon { ...{ sx: { padding: '2px' }} }/>
		Add
	</Button>
</Box> ;

export default AddTodo;
