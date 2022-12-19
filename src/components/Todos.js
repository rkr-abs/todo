import { map } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import { React } from 'react';
import TodoManager from '../services/TodoManager';
import Todo from './Todo';

const Todos = (context) => {
	const { state: { tabValue, todos }} = context;
	const filteredTodos = TodoManager.filterTodo[tabValue](todos);

	return (
		<Box sx={ {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		} }
		>
			{map(filteredTodos, (todo, i) =>
				<Todo key={ i } { ...{ ...context, data: todo } }/>)}
		</Box>);
};

export default Todos;
