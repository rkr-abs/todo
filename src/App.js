import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import InputField from './components/InputField';

const App = (context) =>
	<Box className="App">
		<InputField { ...context }/>
	</Box>;

export default App;
