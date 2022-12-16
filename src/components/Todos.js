import { map } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';
import Todo from './Todo';

const Todos = (context) => {
	const { state: { tabValue, todos }} = context;

	return (
		<Box sx={ {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		} }
		>
			{map(TodoManager.filterTodo[tabValue](todos), (todo, i) =>
				<Todo key={ i } { ...{ ...context, data: todo } }/>)}
		</Box>);
};

export default Todos;
