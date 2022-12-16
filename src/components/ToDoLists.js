import { Tab, Box } from '@mui/material';
import { React } from 'react';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Todos from './Todos';

const ToDoLists = (context) => {
	const { state, actions } = context;

	return <TabContext value={ state.value }>
		<Box>
			<TabList onChange={ (event, tabIndex) =>
				actions.toggleMenu(tabIndex) }
			>
				<Tab label="All"/>
				<Tab label="Active"/>
				<Tab label="Completed"/>
			</TabList>
			<TabPanel value={ state.value }><Todos { ...context }/></TabPanel>
		</Box>
	</TabContext>;
};

export default ToDoLists;
