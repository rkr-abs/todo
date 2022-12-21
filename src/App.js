import './App.scss';
import { Box } from '@mui/material';
import { React } from 'react';
import ClearCompletedTodos from './components/ClearCompletedTodos';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<ToDoList { ...context }/>
		<ClearCompletedTodos { ...context }/>
	</Box>;

export default App;
