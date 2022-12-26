import { React } from 'react';
import { Box, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TodoManager from '../services/TodoManager';

const UpdateTodo = (context) => {
	const { actions } = context;

	return <Box>
		<Button
			{ ...{
				variant: 'contained',
				disabled: TodoManager.isInputEmpty(context),
				onClick: () => actions.updateTodo(context),
				sx: { margin: '2px', padding: '12px' },
			} }
		>
			<AddTaskIcon { ...{ sx: { padding: '2px' }} }/>
			Update
		</Button>
	</Box>;
};

export default UpdateTodo;
