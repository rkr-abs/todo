import { React } from 'react';
import { Box, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import TodoManager from '../services/TodoManager';

const SelectAllTodos = (context) => {
	const { actions } = context;

	return <Box>
		<Checkbox { ...{
			checkedIcon: <Favorite/>,
			icon: <FavoriteBorder/>,
			onClick: (evt) => actions.selectAllTodos(evt.target.checked),
			checked: TodoManager.isAllTodosSelected(context),
		} }
		/>Select All</Box>;
};

export default SelectAllTodos;
