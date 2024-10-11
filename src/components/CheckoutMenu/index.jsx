import { useCartContext } from "../../context/cartContext";
import { Link} from "react-router-dom";
import CheckoutList from "./CheckoutList";
import CheckoutForm from "./CheckoutForm";
export default function CheckoutMenu(){
    const {cart} = useCartContext() 
    return(
        <>
            <div className="grid grid-cols-2 gap-4 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto border-b border-neutral-700">
                <CheckoutList cart={cart}/>
                <CheckoutForm/>
            </div>
        </>
    )
}