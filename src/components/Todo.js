import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteTodo from './DeleteTodo';

const Todo = (context) => {
	const { data: { name, id, isActive }, actions } = context;

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
		<span>{name}</span>
		<DeleteTodo { ...context }/></Box>;
};

export default Todo;
