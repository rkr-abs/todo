import { Button } from '@mui/material';
import { React } from 'react';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

const DeleteTodo = ({ data, actions }) =>
	<Button
		variant="contained"
		color="error"
		size="small"
		onClick={ () => actions.deleteTodo(data) }
	>
		<ClearTwoToneIcon/> </Button> ;

export default DeleteTodo;
