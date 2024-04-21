// 'use client'
// import { todo } from "node:test";
// import { useState } from "react"

// export default function Todo() {
//     const [todos, setTodos] = useState([
//         { id: 1, name: "Go to Fitness", time: 1.5 },
//         { id: 2, name: "Have lunch", time: 1 },
//         { id: 3, name: "Writting code", time: 2 },
//     ]);

//     const [name, setName] = useState('');
//     const [time, setTime] = useState(0);
//     const [editId, setEditId] = useState(0);
    

//     function addTodo(){
//         // todos.push({id: todos.length+1, name, time}); //Not Work

//         // let id;
//         // if(todos.length === 0 ){
//         //     id =1;
//         // }
//         // else {
//         //     id = todos[todos.length-1].id+1;
//         // }
//         // const id = todos[todos.length-1].id+1;
//         const id = (todos.length)?todos[todos.length-1].id+1 : 1
//         setTodos([...todos, {id, name, time}]);
        
//     }

//     function deleteTodos(id: number){
//         setTodos(todos.filter((item) => (+item.id !== +id)))
//     }
//     function editTodos(id: number){
//         // setTodos(todos.filter((item) => (+item.id !== +id)))
//         const editId = todos.findIndex((item) => (+item.id === +id))
//         console.log("Edit id: ", editId);
//         setEditId(editId)
//         setName(todos[editId].name);
//         setTime(todos[editId].time);
//     }
//     function updateTodos(){
//         const tmpTodos = todos;
//         tmpTodos[editId].name = name;
//         tmpTodos[editId].time = time;
//         setTodos([...todos]);
//         console.log(todos)
//     }
    
//     return (
//         <>
//             <h1>Register</h1>
//             <ul>
//                 {
//                     todos.map((item, index) => (

//                         <li key={index}>{item.id}: {item.name} : {item.time}
                        
//                         <button className="border-2 border-black m-2"
//                             onClick={() => deleteTodos(item.id)}
//                         >
//                             Delete</button>
//                         <button className="border-2 border-black m-2"
//                             onClick={() => editTodos(item.id)}
//                         >
//                             Edit</button>
//                         </li>
                        
//                     ))
//                 }

//                 <hr />
//                 <section className="w-80 m-auto text-xl mt-4"><h2>Add todo</h2>
//                     <div>
//                         <div>Name:</div>
//                         <div className="border-2 border-black"> <input
//                             className="w-72 h-8 p-2" type="text"
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                         </div>
//                     </div>
//                     <div>
//                         <div>Time:</div>
//                         <div className="border-2 border-black"> <input
//                             className="w-72 h-8 p-2" type="text"
//                             onChange={(e) => setTime(+e.target.value)}
//                         />
//                         </div>
//                     </div>
//                     <div>
//                         <button className="border-2 border-black mt-4 p-2 rounded-lg text-xl"

//                         onClick={addTodo}
//                         >
//                             Add
//                         </button>
//                     </div></section>

//                     <hr />

//                 <section className="w-80 m-auto text-xl mt-4"><h2>Edit todo</h2>
//                     <div>
//                         <div>Name:</div>
//                         <div className="border-2 border-black"> <input
//                             className="w-72 h-8 p-2" type="text"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                         />
//                         </div>
//                     </div>
//                     <div>
//                         <div>Time:</div>
//                         <div className="border-2 border-black"> <input
//                             className="w-72 h-8 p-2" type="text"
//                             onChange={(e) => setTime(+e.target.value)}
//                             value={time}
//                         />
//                         </div>
//                     </div>
//                     <div>
//                         <button className="border-2 border-black mt-4 p-2 rounded-lg text-xl"

//                         onClick={updateTodos}
//                         >
//                             Edit
//                         </button>
//                     </div></section>

//             </ul>
//         </>


//     )
// }
'use client';

import {  useState } from "react"

export default function Todo() {

    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);
    const [userId, setUserId] = useState(0);
    const [completed, setCompleted] = useState(false);

    type TodoType = {
        completed: boolean;
        id: number;
        title: string;
        userId: number;
    }

    const [todos, setTodos] = useState<[TodoType]>();

    function fetchTodo() {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}` )
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                const {completed, id, title,userId} = json;
                setCompleted(completed);
                setId(id);
                setTitle(title);
                setUserId(userId); 
            });  
    }

    function fetchAllTodo() {
        fetch(`https://jsonplaceholder.typicode.com/todos/` )
            .then((response) => response.json())
            .then((json) => {
                console.log(json); 
                setTodos(json);
            });  
    }


    return (
        <>
            <h1>Todo:  </h1>
            <div>User id: {userId}</div>
            <h2>title: {title} </h2>
            <div>  
                {(completed)?(
                 <input type="checkbox" name="complete" value="complete"  checked="checked" /> 
                ):(
                 <input type="checkbox" name="complete" value="complete"  checked=""  />   
                )}
                <label htmlFor="complete"> complete </label>              
            </div>
            
            <input
                className="p-2 border-black border-2" 
                type="number" onChange={ (e) => setId(+e.target.value) } />

            <button 
                className="p-2 border-black border-2"
                onClick={fetchTodo}
                >Fetch</button>

            <button 
                className="p-2 border-black border-2"
                onClick={fetchAllTodo}
                >Fetch All </button>
            <button 
                className="p-2 border-black border-2"
                onClick={() => setTodos([])}
                > Reset </button>
            <hr />
            <div> 
                <ul>
                    { 
                        todos?.map( (item, index) => 
                            <li key={index}>{index+1}: 
                                {item.title} : {item.id}
                                <div>  
                                    {(completed)?(
                                    <input type="checkbox" name="complete" value="complete"  checked="checked" /> 
                                    ):(
                                    <input type="checkbox" name="complete" value="complete"  checked=""  />   
                                    )}
                                    <label htmlFor="complete"> complete </label>              
                                </div>
                            </li>
                        ) 
                    }
                </ul>
            </div>
        </>
    )
}

