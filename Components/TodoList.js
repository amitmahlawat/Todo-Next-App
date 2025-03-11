import { useState } from "react"
import TodoItem from "./TodoItem"
import classes from './TodoItem.module.css'

const TodoList = ({Todos,setTodos}) => {
    
    
    const HandleComplete=(id)=>{
        
        
        setTodos(Todos.map(todo =>
            todo.id === id ? { ...todo, status: todo.status==="completed" ? "pending" : "completed" } : todo
            
        ));
        //   setTodos(updatedTodos);
          console.log(Todos)

    }
    const HandleDelete=(value)=>{
        const FilteredTodos=Todos.filter(item=>item.id!==value)
        setTodos(FilteredTodos)
        
    }
    
  return (
    
    <ul >
    {Todos.map((item)=>(
        
        <TodoItem key={Math.random()}  title={item.title} status={item.status} DeleteTask={HandleDelete}  completeTask={HandleComplete}/>
    ))}
    </ul>)
}

export default TodoList;
