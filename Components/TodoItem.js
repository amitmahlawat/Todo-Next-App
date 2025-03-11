import classes from './TodoItem.module.css'


const TodoItem = ({title,id,DeleteTask,completeTask,status}) => {


  return (
    
    <li className={status==="pending" ? classes.pending : classes.completed}>
      {title}<span> <button style={{width:"80px"}} className={classes.button} onClick={()=>{completeTask(id)}}>{status==="pending"? "complete" : "Undo"}</button><button className={classes.button}  onClick={()=>{DeleteTask(id)}}>Delete</button> </span><p>{status}</p>
      </li>
    
  )
}

export default TodoItem;
