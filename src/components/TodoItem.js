import { Box } from '@mui/material';
import { React } from 'react';

const TodoItem = ({ data }) => <Box sx={ { padding: '2%' } }>
	{data} </Box>;

export default TodoItem;
