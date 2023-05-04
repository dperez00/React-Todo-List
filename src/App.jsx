import {useState, useEffect} from "react";
import "./styles.css";
import {NewTodoForm} from "./NewTodoForm";
import {TodoList} from "./TodoList";

export default function App () {
  /*todos needs to stay in the app file. You can't move
  it into the form because we also need it for the list. */

  /*to get our info from localStorage, we call useState
  with a function.
  whatever you return from the function is your 
  default value. */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });
  /* This makes it so that our info and any changes 
  are not lost after a refresh.*/

  /* useEffect takes a function as it's argument. 
  This function is essentially saying, 
  run this function every time the objects inside
  the array of our second property change*/
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])
  /*Anytime the values of our todos change we call 
  this function and this function is taking our 
  todos and storing them inside localStorage */

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
        // makes it so the input is empty after each add of a new item.
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {/* onSubmit is a custom prop that calls the
      addTodo function. Custom props can be called 
      whatever you want */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}