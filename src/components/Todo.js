import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import DeleteTodo from './DeleteTodo';

const Todo = ({ data, ...context }) => <Box>
	<Checkbox color="success"/>
	{data.name}
	<DeleteTodo { ...{ ...context, data } }/></Box>;

export default Todo;
