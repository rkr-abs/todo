
import { React } from 'react';
import { Box, Button } from '@mui/material';
import TodoManager from '../services/TodoManager';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const actions = {
	update: (context) => {
		const { actions: { updateTodo }} = context;

		return updateTodo(context);
	},
	add: (context) => {
		const { actions: { addTodo }} = context;

		return addTodo(context);
	},
};

const GenBox = (action) => {
	const absBox = (context) => <Box>
		<Button
			{ ...{
				variant: 'contained',
				disabled: TodoManager.isInputEmpty(context),
				onClick: () => actions[action](context),
				sx: { margin: '2px', padding: '12px' },
			} }
		>
			<UpgradeIcon { ...{ sx: { padding: '2px' }} }/>
			{ action }
		</Button>
	</Box>;

	return absBox;
};

export default GenBox;
