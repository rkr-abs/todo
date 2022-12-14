import { Box } from '@mui/material';
import { React } from 'react';

const TodoTab = ({ name, id }) => <Box sx={ { padding: '2%' } }>
	{id}:{name} </Box>;

export default TodoTab;
