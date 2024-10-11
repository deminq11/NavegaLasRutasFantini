import { useCartContext} from "../../../context/cartContext"
import { serverTimestamp} from "firebase/firestore"
import { useState } from "react"
import CheckoutModal from "../CheckoutModal"
export default function CheckoutForm (){
    const [showModal, setShowModal] = useState(false)
    const [order, setOrder] = useState({})
    const {cart} = useCartContext()
    const handlePurchase = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const order = {
            buyer: {name, email, phone},
            items: cart,
            total: cart.reduce((acc, item)=> acc+item.quantity*item.price, 0),
            date: serverTimestamp()
        }
        setOrder(order)
        setShowModal(true)
    }
    return (
        <div>
            <h2 className="pb-5 text-2xl lg:text-4xl text-gray-800 font-medium dark:text-neutral-300">
            Datos para la Compra:</h2>
            <form className="max-w-sm space-y-3" onSubmit={handlePurchase}>
                <div className="relative">
                    <input type="email" name="email" required className="transition peer py-3 pe-0 ps-8 blk w-full bg-transparent    border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:ocborder-t-transparent focus:border-x-transparent  focus:outline-0 dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500  hover:border-b-neutral-400 dark:focus:border-b-violet-400" placeholder="Email"/>
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg className="shrink-0 size-4  text-gray-500 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                </div>
                <div className="relative">
                    <input type="text"  name="name" required className="transition peer py-3 pe-0 ps-8 blk w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:ocborder-t-transparent focus:border-x-transparent  focus:outline-0 dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500  hover:border-b-neutral-400 dark:focus:border-b-violet-400" placeholder="Nombre"/>
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                </div>
                <div className="relative">
                    <input type="tel" name="phone" pattern="\d{2}-\d{4}-\d{4}" required className="transition peer py-3 pe-0 ps-8 blk w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:ocborder-t-transparent focus:border-x-transparent  focus:outline-0 dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500  hover:border-b-neutral-400 dark:focus:border-b-violet-400" placeholder="xx-xxxx-xxxx"/>
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    </div>
                </div>
                <button type="submit" className="w-full py-3 px-4 inline-flex transition justify-center items-center gap-x-2 text-sm font-medium rounded-lg border text-neutral-300 hover:bg-neutral-900 focus:outline-none border-neutral-400 hover:border-violet-400 disabled:opacity-50 disabled:pointer-events-none">Finalizar Compra</button>
            </form>
            {showModal && 
                <div>
                    <CheckoutModal order={order} setShowModal={setShowModal}/>
                    <div className="z-20 fixed top-0 left-0 w-full h-full bg-neutral-900 opacity-25"></div>
                </div>
            } 
        </div>
    )
}