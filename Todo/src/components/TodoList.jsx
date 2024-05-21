import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleEdit, handleDelete, editId, editText, setEditText }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </div>
  );
}

export default TodoList;
