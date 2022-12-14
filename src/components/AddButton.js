import { Button } from '@mui/material';
import { React } from 'react';
import isInputEmpty from '../services/hasInputValue';

const AddButton = ({ actions, state }) => {
	const isEmpty = isInputEmpty(state);

	return (
		<Button
			variant="contained"
			disabled={ isEmpty }
			onClick={ () => actions.setTodo() }
		> Add </Button>) ;
};

export default AddButton;
