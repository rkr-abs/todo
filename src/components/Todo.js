import { peek } from '@laufire/utils/debug';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteTodo from './DeleteTodo';

const props = ({ data }) => ({
	icon: <FavoriteBorder/>,
	color: 'success',
	checkedIcon: <Favorite/>,
	onClick: () => peek(data.id),
});

const Todo = (context) => {
	const { data } = context;

	return <Box>
		<Checkbox { ...props(context) }/>
		{data.name}
		<DeleteTodo { ...context }/></Box>;
};

export default Todo;
