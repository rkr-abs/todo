import { peek } from '@laufire/utils/debug';
import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteButton from './DeleteButton';

const Todo = ({ data: { name, id }, ...rest }) => {
	peek(rest);
	return <Box>
		<Checkbox color="success"/>
		{name} <DeleteButton { ...{ id } }/></Box>;
};

export default Todo;
