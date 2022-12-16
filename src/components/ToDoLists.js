import { Tab, Box } from '@mui/material';
import { React } from 'react';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Todos from './Todos';

const props = {
	justifyContent: 'center',
	display: 'flex',
	borderColor: 'divider',
};

const ToDoLists = (context) => {
	const { state: { tabValue }, actions } = context;

	return <TabContext value={ tabValue }>
		<Box sx={ props }>
			<TabList
				onChange={ (event, tabIndex) =>
					actions.toggleTab(tabIndex) }
			>
				<Tab label="All"/>
				<Tab label="Active"/>
				<Tab label="Completed"/>
			</TabList>
		</Box>
		<TabPanel value={ tabValue }><Todos { ...context }/></TabPanel>
	</TabContext>;
};

export default ToDoLists;
