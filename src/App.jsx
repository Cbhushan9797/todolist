import React,{useState} from 'react'

function App() {
  //store todos
  const[todos,setTodo]=useState([]);

  //current state
  const[inputValue, setInputValue]=useState('');

  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleSubmit(e){
       e.preventDefault()
       setTodo([...todos, inputValue]);
       setInputValue('');
  }
  function handleDelete(index){
          const newTodo=[...todos]
          newTodo.splice(index,1)
          setTodo(newTodo);
  }


  return (
    <div>
      <h1>
        todo list 
      </h1>
      <form>
        <input type='text' id='input' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>add</button>
      </form>
      <ul>
        
         {todos.map((todo,index)=>(
          <li key={index}>{todos} 
          <button onClick={()=>handleDelete(index)}>delete</button
          ></li> 
         
         ))
        }
        
        
      </ul>
      
    </div>
  )
}

export default App
