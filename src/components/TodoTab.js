import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteButton from './DeleteButton';

const TodoTab = ({ name }) =>
	<Box>
		<Checkbox color="success"/>
		{name} <DeleteButton/></Box>;

export default TodoTab;
