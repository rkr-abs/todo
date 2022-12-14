import { map } from '@laufire/utils/collection';
import { React } from 'react';
import TodoTab from './TodoTab';

const TodoTabs = ({ state: { todos }}) =>
	map(todos, (todo, i) =>
		<TodoTab key={ i } { ...todo }/>);

export default TodoTabs;
