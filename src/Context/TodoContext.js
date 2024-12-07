/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react"; 

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "todo msg",
            desc : "description",
            completed  : false,
            priority : "Medium",
        }
    ],
    addTodo : (id, todo) => {},
    updatedTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext)
} 

export const TodoProvider = TodoContext.Provider;