import TodoForm from "@/Components/Todo-Form";
import TodoList from "@/Components/TodoList";
import { useState } from "react";


function HomePage() {
const [Todos,setTodos]=useState([])
const addedTodo=(enteredValue)=>{
  console.log(enteredValue)
  setTodos([...Todos,enteredValue])

}

  return (
    <div className="container">
      <div className="form"  ><TodoForm addedtodo={addedTodo}/></div>
      <div className="list"><TodoList Todos={Todos} setTodos={setTodos} /></div>
      
    </div>
  )
}

export default HomePage;
