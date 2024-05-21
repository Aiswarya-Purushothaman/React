import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [toDo, setToDo] = useState("");

  const handleSubmit = () => {
    if (toDo.trim() !== "") {
      addTodo({
        id: Date.now(),
        text: toDo,
        status: false,
      });
      setToDo("");
    }
  };

  return (
    <div className="input">
      <input
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        placeholder="🖊️ Add item..."
      />
      <i onClick={handleSubmit} className="fas fa-plus"></i>
    </div>
  );
}

export default TodoInput;
