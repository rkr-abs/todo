import { map } from '@laufire/utils/collection';
import { React } from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ state: { inputValues }}) =>
	map(inputValues, (inputValue, i) =>
		<TodoItem key={ i } { ...{ data: inputValue } }/>);

export default TodoItems;
