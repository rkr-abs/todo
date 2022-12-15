import { map } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import { React } from 'react';
import Todo from './Todo';

const Todos = (context) => {
	const { state: { todos }} = context;

	return (
		<Box sx={ {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		} }
		>
			{map(todos, (todo, i) =>
				<Todo key={ i } { ...{ ...context, data: todo } }/>)}
		</Box>);
};

export default Todos;
