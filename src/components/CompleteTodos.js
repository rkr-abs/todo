import { map } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import { React } from 'react';
import Todo from './Todo';

const CompleteTodos = (context) => {
	const { state: { completeTodos }} = context;

	return (
		<Box sx={ {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		} }
		>
			{map(completeTodos, (todo, i) =>
				<Todo key={ i } { ...{ ...context, data: todo } }/>)}
		</Box>);
};

export default CompleteTodos;
