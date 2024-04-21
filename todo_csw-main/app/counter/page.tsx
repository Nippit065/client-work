'use client'
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Counter: {count} </h1>
            <button 
                className="border-2 border-black p-2 mr-2"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
            <button className="border-2 border-black p-2">-</button>
        </>
    )
}