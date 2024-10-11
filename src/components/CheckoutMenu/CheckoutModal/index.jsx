import CheckoutModalItem from "./CheckoutModalItem"
import {useCartContext} from "../../../context/cartContext"
import { createOrder } from "../../../firebase/db"
import { useEffect, useState} from "react"
export default function CheckoutModal({order, setShowModal}){
    const {emptyCart, cart} = useCartContext()
    const [orderId, setOrderId] = useState("")

    const handleClose = ()=>{
        setShowModal(false)
        emptyCart()
    }
    useEffect(()=>{
        async function getOrderId(){
        const id = await createOrder(order)
        setOrderId(id)
        }
        getOrderId()
    },[])
    
    const total = cart.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);
    
    return(
        <div id="hs-scale-animation-modal" className="hs-overlay size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div className="scale-95 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 id="hs-scale-animation-modal-label" className="font-medium text-2xl text-gray-800 dark:text-violet-300">
                        Tu Compra se realizó!
                        </h3>
                        <button onClick={handleClose} type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-scale-animation-modal">
                        <span className="sr-only">Close</span>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                        <p className="mt-1 font-medium text-gray-800 dark:text-neutral-300">
                            {order.buyer.name}, tu compra se ha realizado exitosamente con el ID: <span className="text-sm text-neutral-400">{orderId}</span>.
                        </p>
                        <div className="flex flex-col gap-4">
                            {order.items.map(item => (
                            <CheckoutModalItem key={item.id} item={item}/>
                            ))}
                            <div className="border-b-2 w-fit border-neutral-700  dark:text-neutral-400">Total: <span className="text-neutral-300">${total}</span></div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                        <button onClick={handleClose} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-neutral-600 text-white hover:bg-violet-400 focus:outline-none focus:bg-violet-500 disabled:opacity-50 disabled:pointer-events-none">
                        Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
