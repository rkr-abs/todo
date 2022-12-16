import { Tab, Box } from '@mui/material';
import { React } from 'react';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Todos from './Todos';

const props = {
	justifyContent: 'center',
	display: 'flex',
};

const ToDoLists = (context) => {
	const { state, actions } = context;

	return <TabContext value={ state.value }>
		<Box sx={ props }>
			<TabList
				sx={ { justifyContent: 'center' } }
				onChange={ (event, tabIndex) =>
					actions.toggleMenu(tabIndex) }
			>
				<Tab label="All"/>
				<Tab label="Active"/>
				<Tab label="Completed"/>
			</TabList>
		</Box>
		<TabPanel value={ state.value }><Todos { ...context }/></TabPanel>
	</TabContext>;
};

export default ToDoLists;
