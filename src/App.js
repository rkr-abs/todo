import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import InputField from './components/InputField';
import ToDoLists from './components/ToDoLists';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<ToDoLists { ...context }/>
	</Box>;

export default App;
