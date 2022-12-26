import { React } from 'react';
import { Box, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TodoManager from '../services/TodoManager';

const AddTodo = (context) => {
	const { actions, state: { todoButton }} = context;
	const editedTodo = {
		Add: () => actions.addTodo(context),
		update: () => actions.updateTodo(context),
	};

	return <Box>
		<Button
			{ ...{
				variant: 'contained',
				disabled: TodoManager.isInputEmpty(context),
				onClick: editedTodo[todoButton],
				sx: { margin: '2px', padding: '12px' },
			} }
		>
			<AddTaskIcon { ...{ sx: { padding: '2px' }} }/>
			{todoButton}
		</Button>
	</Box>;
};

export default AddTodo;
