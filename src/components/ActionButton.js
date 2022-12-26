import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';

const ActionButton = (context) => {
	const { state } = context;
	const isEdit = !!state.editedTodo;
	const todoAction = {
		false: AddTodo(context),
		true: UpdateTodo(context),
	};

	return todoAction[isEdit];
};

export default ActionButton;
