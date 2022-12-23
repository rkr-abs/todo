import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { React } from 'react';
import { Box, Checkbox } from '@mui/material';
import DeleteTodo from './DeleteTodo';
import TodoName from './TodoName';

const Todo = (context) => {
	const { data: { id, isActive }, actions } = context;

	return <Box>
		<Checkbox { ...{
			icon: <FavoriteBorder/>,
			color: 'success',
			checkedIcon: <Favorite/>,
			onClick: (evt) =>
				actions.changeStatus({ isActive: evt.target.checked, id: id }),
			checked: !isActive,
		} }
		/>
		<TodoName { ...context }/>
		<DeleteTodo { ...context }/></Box>;
};

export default Todo;
