import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import InputField from './components/InputField';
import TodoTabs from './components/TodoTabs';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<TodoTabs { ...context }/>
	</Box>;

export default App;
