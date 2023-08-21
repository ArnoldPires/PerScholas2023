import { useState } from "react";

export default function Todo({ todo, completeTodo, editTodoText, deletedTodo}) {
  const [showInput, setShowInput] = useState(false)
  return(
    <>
      <h1>Todo</h1>
      <li>
      <div className="left">
        <h2 onClick={(event) => {
          setShowInput(!showInput)
        }}
        >
          {todo.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none"}}
          type ="text"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              editTodoText(todo.id, event)
              setShowInput(false)
            }
          }}
          />
      </div>
      <label className="middle">
        complete
        <input type="checkbox" checked={todo.completed} onChange={(event) => {
            completeTodo(todo.id, event)
          }}
          />
      </label>
      <button checked = {todo.completed} onClick = {(event) => {
        deletedTodo(todo.id)
      }}
      >
        Delete Todo
      </button>
      </li>
    </>
  )
}