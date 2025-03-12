// import TodoList from "@/Components/TodoList";
import TodoList from "@/Components/TodoList";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import { useState } from "react";


function Completed(props) {
  const [Todos,setTodos]=useState(props.Todos || [])

 const completedTodos=Todos.filter(todo=>todo.status==="completed")

return(
  <div className="container">
      <div className="list"><TodoList  Todos={completedTodos} setTodos={setTodos}/></div>
    </div>
  
)
  
}

export async function getServerSideProps() {
  const Client=await MongoClient.connect('mongodb+srv://Amit:hQOowmd9qfJPIiMN@cluster0.rleji.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0')
  const db = Client.db();
  const TodosCollection = db.collection("Todos");

  
  const Todo = await TodosCollection.find().toArray();
  Client.close();

  return {
    props: {
      Todos: Todo.map((item) => ({
        id: item._id.toString(),
        title: item.title,
        status:item.status
      })),
    },
  };
}

export default Completed;
