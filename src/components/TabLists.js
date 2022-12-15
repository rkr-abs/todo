import { Tab, Box } from '@mui/material';
import { React } from 'react';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import Todos from './Todos';
import CompleteTodos from './CompleteTodos';

const TabLists = (context) => {
	const { state, actions } = context;

	return <TabContext value={ state.value }>
		<Box>
			<TabList onChange={ (event, tabIndex) => actions
				.toggleMenu(tabIndex) }
			>
				<Tab label="All" value="0"/>
				<Tab label="Active" value="1"/>
				<Tab label="Completed" value="2"/>
			</TabList>
			<TabPanel value="0"><Todos { ...context }/></TabPanel>
			<TabPanel value="2"><CompleteTodos { ...context }/></TabPanel>
		</Box>
	</TabContext>;
};

export default TabLists;
