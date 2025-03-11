import { useState } from "react";

export default function TodoForm(props) {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    if(text.length>0){
    
    
    e.preventDefault();
    const TodoItem={
      title: text,
      status:"pending",
      
    }
    props.addedtodo(TodoItem)
    setText('')}
    
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
}