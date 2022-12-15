import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import InputField from './components/InputField';
import Todos from './components/Todos';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
		<Todos { ...context }/>
	</Box>;

export default App;
