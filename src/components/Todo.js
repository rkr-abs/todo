import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteButton from './DeleteButton';

const Todo = ({ data, ...context }) => <Box>
	<Checkbox color="success"/>
	{data.name}
	<DeleteButton { ...{ ...context, data } }/></Box>;

export default Todo;
