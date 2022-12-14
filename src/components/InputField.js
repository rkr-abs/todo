import { Box } from '@mui/material';
import { React } from 'react';
import AddButton from './AddButton';
import TextBox from './TextBox';

const InputField = (context) =>
	<Box sx={ {
		display: 'flex', justifyContent: 'center', alignItems: 'center',
	} }
	>
		<TextBox { ...context }/>
		<AddButton { ...context }/>
	</Box>;

export default InputField;
