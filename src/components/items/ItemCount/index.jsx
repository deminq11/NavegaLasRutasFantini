import { useState } from "react"

export default function ItemCount ({stock, onAdd}){
    const [count, setCount] = useState(1)
    const handleAdd = () =>{      
        if(count<stock){
            setCount(count+1)}
    }
    const handleSubstract = () =>{
        if(count>1){
            setCount(count-1)}
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2">
            <button onClick={handleSubstract} className="w-fit p-1 text-2xl rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none" >-</button>
            <p className="py-1 px-3 text-base rounded-full border-x-0 text-gray-200 border-2 border-gray-600">{count}</p>
            <button onClick={handleAdd} className="w-fit p-1 text-2xl rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none"
            >+</button>
            </div>
            <button onClick={()=> onAdd(count)} disabled={!stock} className="mt-2 border border-neutral-500 text-center font-light text-base w-fit rounded-lg py-2 px-2 text-gray-600 hover:text-gray-600 hover:bg-violet-200 focus:outline-none focus:text-gray-400  dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:text-neutral-400">Agregar al carrito</button>
        </div>
    )
}