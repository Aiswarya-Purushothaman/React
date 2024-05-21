// import "./App.css";
// import { useState } from "react";

// function App() {
//   console.log("hey review");
//   const [toDos, setTodos] = useState([]);
//   const [toDo, setToDo] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");
//   const handleDelete = (id) => {
//     setTodos(toDos.filter((obj) => obj.id !== id));
//   };

//   const handleEdit = (id, newText) => {
//     setEditId(id);
//     setEditText(newText);
//   };

//   const handleSaveEdit = (id) => {
//     setTodos(
//       toDos.map((obj) => {
//         if (obj.id === id) {
//           return { ...obj, text: editText };
//         }
//         return obj;
//       })
//     );
//     setEditId(null);
//   };

//   const getCurrentDayOfWeek = () => {
//     const daysOfWeek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     const today = new Date();
//     const dayOfWeek = daysOfWeek[today.getDay()];
//     return dayOfWeek;
//   };

//   const daystyle = {
//     color: "white",
//     fontStyle: "italic",
//   };

//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Whoop, it's {getCurrentDayOfWeek()} 🌝 ☕ </h2>
//       </div>
//       <div className="input">
//         <input
//           value={toDo}
//           onChange={(e) => setToDo(e.target.value)}
//           type="text"
//           placeholder="🖊️ Add item..."
//         />
//         <i
//           onClick={() => {
//             if (toDo === "") {
//               return null;
//             } else {
//               setTodos([
//                 ...toDos,
//                 { id: Date.now(), text: toDo, status: false },
//               ]);
//               setToDo("");
//             }
//           }}
//           className="fas fa-plus"
//         ></i>
//       </div>

      
//       <div className="todos">
//         {toDos.map((obj) => (
//           <div className="todo" key={obj.id}>
//             <div className="left">
//               <input
//                 onChange={(e) => {
//                   setTodos(
//                     toDos.map((obj2) => {
//                       if (obj2.id === obj.id) {
//                         return { ...obj2, status: e.target.checked };
//                       }
//                       return obj2;
//                     })
//                   );
//                 }}
//                 value={obj.status}
//                 type="checkbox"
//                 name=""
//                 id=""
//               />
//               {editId === obj.id ? (
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//               ) : (
//                 <p>{obj.text}</p>
//               )}
//             </div>
//             <div className="right">
//               {editId === obj.id ? (
//                 <button onClick={() => handleSaveEdit(obj.id)}>Save</button>
//               ) : (
//                 <i
//                   onClick={() => handleEdit(obj.id, obj.text)}
//                   className="fas fa-edit"
//                 ></i>
//               )}
//               <i
//                 onClick={() => handleDelete(obj.id)}
//                 className="fas fa-times"
//               ></i>
//             </div>
//           </div>
//         ))}
//         {toDos.map((obj) => {
//           if (obj.status) {
//             return <h1 key={obj.id}>{obj.text}</h1>;
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  console.log("hey review");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
   
    setEditId(id);
    setEditText(newText)
    handleSaveEdit(id,newText)
    
  };

  const handleSaveEdit = (id,newText) => {
   
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
    setEditId(null);
  };
  

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const getCurrentDayOfWeek = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    return dayOfWeek;
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getCurrentDayOfWeek()} 🌝 ☕ </h2>
      </div>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
       
      />
    </div>
  );
}


export default App


