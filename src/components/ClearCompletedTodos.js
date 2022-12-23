import { React } from 'react';
import { Button } from '@mui/material';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

const ClearCompletedTodos = ({ data, actions }) =>
	<Button { ...{
		variant: 'contained',
		color: 'error',
		size: 'small',
		onClick: () => actions.clearCompletedTodos(data),
	} }
	>Clear All<ClearTwoToneIcon/>
	</Button>;

export default ClearCompletedTodos;
