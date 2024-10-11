import { useCartContext } from "../../../context/cartContext"
import {useState } from "react"
import CartWidgetMenu from "./CartWidgetMenu"
function CartWidget(){
    const [active, setActive] = useState(false)
    const handleActive = ()=>{ 
        if (!active) { setActive(true) }
        if (active) { setActive(false) } 
    }
    const {cart} = useCartContext()
    const count = cart.length
    return(
        <>
            {active&& <div onClick={handleActive} className="z-10 fixed top-0 left-0 w-full h-full bg-neutral-900 opacity-25"></div>}
            <button onClick={handleActive} className="transition z-10 p-1 text-2xl rounded-full text-gray-300 hover:text-gray-500 dark:hover:text-white"  aria-label="Cart"
            >
                <i className="text-3xl fas fa-shopping-cart"></i>
                {count? <span className="font-bold text-sm relative top-2 right-3 px-1 border-y-2 rounded-full text-violet-100 bg-neutral-800 border-violet-400 ">{`${count}`}</span>: ""
                }
            </button>
            <div className="z-10 relative inline-block">
                {active? <CartWidgetMenu cart={cart}/> : ""
                }
            </div>
        </>
    )
    
}
export default CartWidget