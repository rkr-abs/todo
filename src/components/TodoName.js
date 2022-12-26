import { React } from 'react';

const TodoName = (context) => {
	const { data: { name, id }, actions } = context;

	return (
		<span
			{ ...{
				onClick: () => actions.editTodo({ name, id }),
			} }
		> {name} </span>
	);
};

export default TodoName;
