import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import todos from '../reducers/todos';

const TodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false
    };

    dispatch(todos.actions.addTodo(newTodo));
    setValue('');
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button className="task-btn" type="submit">Add Task</button>
      </form>
    </>
  )
};

export default TodoForm;