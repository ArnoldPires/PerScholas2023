import Todo from "./Todo"
export default function TodoList({todos, addTodo, completeTodo, editTodosText, deletedTodo}){
  return(
  <>
    <h1>Todo List</h1>
    <h1>Create Todo</h1>
    <input type="text" onKeyDown={(event) => {
      event.key === "Enter" && addTodo(event)
    }}
    />
    {todos.length ? (
      <>
        <h1>Todo Items</h1>
        <ul className="todolist">
        {todos.filter((i) => !i.completed).map((todo) => {
          return (
            <Todo 
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              editTodoText={editTodosText}
              deletedTodo={deletedTodo}
            />
          )
        })}
      </ul>
      <h1>Completed Items</h1>
      <ul className="todolist">
        {todos.filter((i) => i.completed).map((todo) => {
          return (
            <Todo key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            editTodoText={editTodosText}
            deletedTodo={deletedTodo}
            />
          )
        })}
      </ul>
      </>
    ) : (
      <h1>No Todos Added Yet</h1>
    )}
    </>
  )
}