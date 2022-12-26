import { React } from 'react';

const TodoName = (context) => {
	const { data, actions } = context;

	return (
		<span
			{ ...{
				onClick: () => actions.editTodo(data),
			} }
		> {data.name} </span>
	);
};

export default TodoName;
