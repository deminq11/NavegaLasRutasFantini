import CheckoutItem from "./CheckoutItem"
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
export default function CheckoutList({cart}){
    const navigate = useNavigate()
    useEffect(() => {
        if (cart.length === 0) {
            navigate('/')
        }
      }, [cart]);
      const total = cart.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);
      
    return(
        <>
            <div className="flex flex-col gap-4">
                <h2 className="pb-5 text-2xl lg:text-4xl text-gray-800 font-medium dark:text-neutral-300">
                Resumen de la Compra:</h2>
                {cart.map(item => (
                <CheckoutItem key={item.id} item={item}/>
                ))}
                <div className="text-lg  dark:text-neutral-400">Total: <span className="text-neutral-300">${total}</span></div>
            </div>
        </>
    )
}