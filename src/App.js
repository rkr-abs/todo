import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import InputField from './components/InputField';
import TodoItems from './components/TodoItems';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<TodoItems { ...context }/>
	</Box>;

export default App;
