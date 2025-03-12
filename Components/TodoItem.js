import classes from './TodoItem.module.css'


const TodoItem = ({title,id,status, Todos,setTodos}) => {

const completeTask=async(id)=>{
    setTodos(Todos.map(todo =>
        todo.id === id ? { ...todo, status: status==="pending"? "completed" : "pending" }: todo
    ));

    const updatedData={
        id: id,
        status: status==="pending" ? "completed" : "pending"
    }

    const response=await fetch('/api/Add-Todo',{
        method:"PATCH",
        body:JSON.stringify(updatedData),
        headers:{
            'content-type': 'application/json'
        }
    })
    const data = await response.json();
  console.log(updatedData);

}

const DeleteTask=async(id)=>{
    setTodos(Todos.filter(todo=>todo.id!==id))
    const response = await fetch("/api/Add-Todo", {
        method: "DELETE",
        body: JSON.stringify({id}),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      const data = await response.json();
      console.log(data.message);

    
}


  return (
    
    <li className={status==="pending" ? classes.pending : classes.completed}>
      {title}<span> <button style={{width:"80px"}} className={classes.button} onClick={()=>{completeTask(id)}}>{status==="pending"? "complete" : "Undo"}</button><button className={classes.button}  onClick={()=>{DeleteTask(id)}}>Delete</button> </span><p>{status}</p>
      </li>
    
  )
}

export default TodoItem;
