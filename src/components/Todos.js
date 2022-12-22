import { React } from 'react';
import { Box } from '@mui/material';
import SelectAllTodos from './SelectAllTodo';
import FilteredTodos from './FilteredTodos';

const Todos = (context) =>
	<Box { ...{
		sx: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		},
	} }
	>
		<SelectAllTodos { ...context }/>
		<FilteredTodos { ...context }/>
	</Box>;

export default Todos;
