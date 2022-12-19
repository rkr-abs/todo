import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import ClearCompletedTodos from './components/ClearCompletedTodos';
import InputField from './components/InputField';
import ToDoLists from './components/ToDoLists';
const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<ToDoLists { ...context }/>
		<ClearCompletedTodos { ...context }/>

	</Box>;

export default App;
