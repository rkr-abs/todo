import { Button } from '@mui/material';
import { React } from 'react';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

const DeleteButton = () =>
	<Button
		variant="contained"
		color="error"
		size="small"
	>
		<ClearTwoToneIcon/>	 </Button> ;

export default DeleteButton;
