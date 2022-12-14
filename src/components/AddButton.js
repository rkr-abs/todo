import AddTaskIcon from '@mui/icons-material/AddTask';
import { Button } from '@mui/material';
import { React } from 'react';
import isInputEmpty from '../services/hasInputValue';

const AddButton = ({ actions, state }) => {
	const isEmpty = isInputEmpty(state);

	return (
		<Button
			variant="contained"
			disabled={ isEmpty }
			onClick={ () => actions.addTodo() }
			sx={ { margin: '2px', padding: '12px' } }
		> <AddTaskIcon sx={ { padding: '2px' } }/>
			Add </Button>) ;
};

export default AddButton;
