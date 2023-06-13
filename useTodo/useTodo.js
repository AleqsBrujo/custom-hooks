import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"



const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || []
}



export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
      
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
          type: '[TODO] Add TODO',
          payload: todo
        }
        dispatch(action)        
    }

    const handleDeleteTodo = (id) => {
      const action = {
        type: '[TODO] Remove TODO',
        payload: id, 
      }
      dispatch(action)

    }

    const onToggleTodo = (id) => {
      const action = {
        type: '[TODO] check Done TODO',
        payload: id, 
      }
      dispatch(action)
      
    }

    const todosCount = todos.length
    const pendingTodos = todos.filter(todo => !todo.done).length




return {
    handleNewTodo,
    todos,
    handleDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodos
}



}