import React from 'react'
import { useRef } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
import { MdAddComment } from "react-icons/md";
import { useContext } from "react";

const AddTodo = () => {

  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(` ${todoName} due on: ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row ps-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="ps-button btn btn-success">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo