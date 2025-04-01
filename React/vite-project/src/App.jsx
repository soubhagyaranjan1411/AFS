// import { useState } from 'react'

// const App = () => {
//   let [cvalue, setCvalue] = useState(null);

//   function getDataformChild(cdata) {
//     console.log(cdata);
//     setCvalue(cdata);
//   }

//   return (
//     <div>
//       <h1>App Component</h1>
//       {cvalue && <h4>{cvalue}</h4>}
//       <ChildComponent fn={getDataformChild}></ChildComponent>
//     </div>
//   );
// }

// function ChildComponent(props) {
//   let fn = props.fn;
//   let data = 10;
//   return (
//     <div>
//       <h1>Child Component</h1>
//       <button onClick={() => fn(data)}>Send Data</button>
//     </div>
//   );
// }


// export default App;

import React, { useState } from 'react'

const App = () => {
  let [todo,setTodo]=useState([id:"1",title:"Todo 1",description:"Description 1"])
  return (
    <div>
      <h1>Todo application </h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  )
}

function TodoInput(props){
  return(
    <form>
      <input type="text" placeholder="Enter your todo title" />
      <input type="text" placeholder="Enter your todo description" />
      <button>Add Todo</button>
    </form>
  )
}
function TodoList(props){
  let todos=props.todos;
  return(
    <div>
    <ul>
    {Todo.map((todo)=>{
return <TodoComponent key={todo.id} title={todo.title} description={todo.description} />
    })}
    </ul>
    </div>
  )

}
function TodoComponent(props){
  return(
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default App