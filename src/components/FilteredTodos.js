import { React } from 'react';
import { map } from '@laufire/utils/collection';
import TodoManager from '../services/TodoManager';
import Todo from './Todo';

const FilteredTodos = (context) => {
	const { state: { tabValue, todos }} = context;
	const filteredTodos = TodoManager.filterTodo[tabValue](todos);

	return (
		map(filteredTodos, (todo, i) =>
			<Todo key={ i } { ...{ ...context, data: todo } }/>)
	);
};

export default FilteredTodos;
