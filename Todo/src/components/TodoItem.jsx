import React, { useState } from "react";

function TodoItem({ todo, handleEdit, handleDelete }) {
  const [editText, setEditText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    
    handleEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="todo" key={todo.id}>
      <div className="left">
        {isEditing ? (
          <input
            value={editText}
            onChange={handleInputChange}
            type="text"
          />
        ) : (
          <p>{todo.text}</p>
        )}
      </div>
      <div className="right">
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <i onClick={handleEditClick} className="fas fa-edit"></i>
        )}
        <i onClick={() => handleDelete(todo.id)} className="fas fa-times"></i>
      </div>
    </div>
  );
}

export default TodoItem;

