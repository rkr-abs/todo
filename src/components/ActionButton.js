import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';

const ActionButton = (context) => {
	const currentTodo = {
		false: AddTodo(context),
		true: UpdateTodo(context),
	};
	const editedTodo = !!context.state.editedTodo;

	return currentTodo[editedTodo];
};

export default ActionButton;
