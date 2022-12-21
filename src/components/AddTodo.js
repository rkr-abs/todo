import { React } from 'react';
import { Box, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TodoManager from '../services/TodoManager';

const AddTodo = (context) => {
	const { actions } = context;

	return <Box>
		<Button
			{ ...{
				variant: 'contained',
				disabled: TodoManager.isInputEmpty(context),
				onClick: () => actions.addTodo(),
				sx: { margin: '2px', padding: '12px' },
			} }
		>
			<AddTaskIcon { ...{ sx: { padding: '2px' }} }/>
			Add
		</Button>
	</Box>;
} ;

export default AddTodo;
