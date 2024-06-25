import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const ItemContainer = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id} // Use the unique id as the key
          id={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default ItemContainer;
