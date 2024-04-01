import { useEffect, useState } from "react";
// import useFetch from "./useFetch";

const baseUrl='http://localhost:4000';

const App=()=>{
  const [todoList, setData]=useState([]);

  useEffect(()=>{
    fetch(baseUrl+'/api/todo').then(res=>res.json()).then(data=>{setData(data)});
  },[])
  console.log(todoList);
  // console.log(todoList.id, todoList.text);
  
  return(
    <div className='App'>
      <h1>TodoList</h1>
      {todoList.map(todo=>(
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done}</div>
        </div>
      ))}
    </div>
  );
};
export default App;