import { Button } from '@mui/material';
import { React } from 'react';

const AddButton = ({ actions, state }) =>
	<Button
		variant="contained"
		disabled={ state.disable }
		onClick={ () => actions.addValue() }
	> Add </Button>;

export default AddButton;
