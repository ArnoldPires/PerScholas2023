import "./style.css"
import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])
  
  const addTodo = (event) => {
    const newTodo = { text: event.target.value, id: Date.now(), completed: false }
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]))
    setTodos([newTodo, ...todos])
    event.target.value = ""
  }

  const completeTodo = (id, event) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
  }

  const editTodosText = (id, event) => {
    const todoCopy = [...todos]
    const indexOfTodo = todoCopy.findIndex((i) => i.id === id)
    todoCopy[indexOfTodo].text = event.target.value 
    localStorage.setItem("todos", JSON.stringify([...todoCopy]))
    setTodos([...todosCopy])
    event.target.value = ""
  }

  const deletedTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    localStorage.setItem(
      "todos",
      JSON.stringify([...todosCopy])
    )
    setTodos([...todosCopy])
  }
  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodosText={editTodosText}
        deletedTodo={deletedTodo}
        />
    </div>
  );
}