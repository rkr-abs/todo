import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteTodo from './DeleteTodo';

const props = ({ data, actions }) => ({
	icon: <FavoriteBorder/>,
	color: 'success',
	checkedIcon: <Favorite/>,
	onClick: (evt) =>
		actions.setStatus({ isActive: evt.target.checked, id: data.id }),
});

const Todo = (context) => {
	const { data } = context;

	return <Box>
		<Checkbox { ...props(context) }/>
		<span>{data.name}</span>
		<DeleteTodo { ...context }/></Box>;
};

export default Todo;
