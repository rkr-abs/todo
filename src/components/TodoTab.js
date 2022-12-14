import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteButton from './DeleteButton';

const TodoTab = ({ name, id }) =>
	<Box>
		<Checkbox color="success"/>
		{name} <DeleteButton { ...{ id } }/></Box>;

export default TodoTab;
