import { React } from 'react';
import { Tab, Box } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Todos from './Todos';

const ToDoList = (context) => {
	const { state: { tabValue }, actions } = context;

	return <TabContext value={ tabValue }>
		<Box { ...{ sx: { justifyContent: 'center',
			display: 'flex',
			borderColor: 'divider' }} }
		>
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

export default ToDoList;
