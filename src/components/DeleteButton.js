import { Button } from '@mui/material';
import { React } from 'react';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import { peek } from '@laufire/utils/debug';

const DeleteButton = ({ id }) =>
	<Button
		variant="contained"
		color="error"
		size="small"
		onClick={ () => peek(id) }
	>
		<ClearTwoToneIcon/>	 </Button> ;

export default DeleteButton;
