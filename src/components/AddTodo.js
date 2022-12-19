import AddTaskIcon from '@mui/icons-material/AddTask';
import { Box, Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';

const props = ({ actions, state }) => ({
	variant: 'contained',
	disabled: TodoManager.isInputEmpty(state),
	onClick: () => actions.addTodo(),
});

const AddTodo = (context) => <Box>
	<Button
		{ ...props(context) }
		sx={ { margin: '2px', padding: '12px' } }
	> <AddTaskIcon sx={ { padding: '2px' } }/>
		Add </Button></Box> ;

export default AddTodo;
