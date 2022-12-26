import { React } from 'react';
import { Box, Button } from '@mui/material';
import TodoManager from '../services/TodoManager';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const UpdateTodo = (context) => {
	const { actions } = context;

	return <Box>
		<Button
			{ ...{
				variant: 'contained',
				disabled: TodoManager.isInputEmpty(context),
				onClick: () => actions.updateTodo(context),
				sx: { margin: '2px', padding: '12px' },
			} }
		>
			<UpgradeIcon { ...{ sx: { padding: '2px' }} }/>
			Update
		</Button>
	</Box>;
};

export default UpdateTodo;
