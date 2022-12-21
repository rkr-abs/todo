import { React } from 'react';
import { Box, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const SelectAllTodos = ({ actions }) => <Box>
	<Checkbox { ...{
		checkedIcon: <Favorite/>,
		icon: <FavoriteBorder/>,
		onClick: (evt) =>
			actions.selectAllTodos(evt.target.checked),
	} }

	/>Select All</Box>;

export default SelectAllTodos;
