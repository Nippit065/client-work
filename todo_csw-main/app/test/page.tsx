'use client'

import { useState } from 'react';
import Image from 'next/image'

export default function Todo() {
    const [tasks, setTasks] = useState([
        { id: 0, name: "Read a book", time: 20 },
        { id: 1, name: "Write a program", time: 45 },
        { id: 2, name: "Have dinner", time: 10 },    
    ]);
    const [name, setName] = useState('');
    const [time, setTime] = useState(0);

    function addTask() {
        setTasks([ ...tasks, {id: tasks.length, name , time}]);
    }

    function delTask(id: number) {
        setTasks(tasks.filter( (task)=> (+task.id != +id) ) )

    }

    return (
        <div>
            <h1>Todo</h1>
            <Image
                src="/photo.avif"
                width={200}
                height={620}
                alt="Picture of the author"
                />

            <ul>
                {tasks.map((task) =>
                (<li key={task.id}>
                    {task.id + 1}: {task.name}: {task.time}
                    <button 
                        className='border-black border-2'
                        onClick={() => delTask(task.id)}
                        >del</button>
                </li>)

                )
                }
            </ul>
            <hr />
            <div>
                <h2>Add task</h2>
                <form>
                    <label htmlFor="task">Name</label>
                    <input
                        className='border-black border-2' 
                        type="text" name="task" 
                        onChange={ e=> setName(e.target.value)}
                        /> 
                        <br />
                    <label htmlFor="task">Time</label>
                    <input 
                        className='border-black border-2 ml-2'
                        type="number" name="time" 
                        onChange={e => setTime(+e.target.value)}
                        />
                </form>
            </div>
            <button onClick={addTask}>Add</button>
        </div>

    )
}

// export default function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>
//                 Counter:  {count}
//             </h1>
//             <br />
//             <button
//                 className='border-black border-2 rounded-lg  p-2 m-2'
//                 onClick={()=>setCount(count+1)}>Inc</button>
//         </div>

//     )
// }