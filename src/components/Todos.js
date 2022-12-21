import { React } from 'react';
import { map } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import TodoManager from '../services/TodoManager';
import Todo from './Todo';
import SelectAllTodos from './SelectAllTodo';

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
			<SelectAllTodos { ...context }/>
			{map(filteredTodos, (todo, i) =>
				<Todo key={ i } { ...{ ...context, data: todo } }/>)}
		</Box>);
};

export default Todos;
