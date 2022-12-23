import { React } from 'react';

const TodoName = (context) => {
	const { data: { name }} = context;

	return <span> {name} </span>;
};

export default TodoName;
