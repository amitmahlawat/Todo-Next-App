import TodoForm from "@/Components/Todo-Form";
import TodoList from "@/Components/TodoList";
import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

function HomePage(props) {
const [Todos,setTodos]=useState(props.Todos || [])
const pendingTodos=Todos.filter(todo=>todo.status==="pending")
const addedTodo=async(enteredValue)=>{
 
  setTodos([...Todos,enteredValue])
  const response=await fetch('/api/Add-Todo',
    {
        method: "POST",
        body: JSON.stringify(enteredValue),
        headers:{
            'Content-Type' : 'application/json'
        }
        
    }
)
const data= await response.json();


  


}

  return (
    <div className="container">
      <div className="form"  ><TodoForm addedtodo={addedTodo}/></div>
      <div className="list"><TodoList Todos={pendingTodos} setTodos={setTodos} /></div>
      
    </div>
  )
}


export async function getStaticProps() {
  const Client=await MongoClient.connect('mongodb+srv://Amit:hQOowmd9qfJPIiMN@cluster0.rleji.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0')
    const db=Client.db()
    const TodosCollection=db.collection("Todos")
  const Todo = await TodosCollection.find().toArray();
  console.log(Todo)
  
  Client.close();

  return {
    props: {
      Todos: Todo.map((item) => ({
        title: item.title,
        status: item.status,
        id: item._id.toString(),
      })),
    },
    revalidate: 1,
  };
}




export default HomePage;
