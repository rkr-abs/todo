import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import InputField from './components/InputField';
import TabLists from './components/TabLists';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<TabLists { ...context }/>
	</Box>;

export default App;
