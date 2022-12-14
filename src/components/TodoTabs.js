import { map } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import { React } from 'react';
import TodoTab from './TodoTab';

const TodoTabs = ({ state: { todos }}) =>
	<Box sx={ {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	} }
	>
		{map(todos, (todo, i) =>
			<TodoTab key={ i } { ...todo }/>)}
	</Box>;

export default TodoTabs;
