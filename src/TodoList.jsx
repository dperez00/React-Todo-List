import { TodoItem } from "./TodoItem"

export function TodoList ({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length == 0 && "No Todos"}
            {todos.map(todo => {
            return (
                /* takes a "key" because it's being rendered 
                inside an array.
                The "{...todo}" spread passes all the props of the todo.*/
                <TodoItem 
                    {...todo} 
                    key={todo.id} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo} />
            )
            })}
      </ul>
    )
}