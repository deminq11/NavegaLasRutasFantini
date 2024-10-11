import CartItem from "./CartItem"
export default function CartList({cart}){
    return(
        <div className="grid grid-cols-1 gap-6">
            {cart.map(item => (
            <CartItem key={item.id} item={item}/>
            ))}
        </div>
    )
}