import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";



function TodoItem ({id, todoName, todoDate})  {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row ps-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className=" ps-button btn btn-danger"
            onClick={() => deleteItem(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;