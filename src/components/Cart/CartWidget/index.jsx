function CartWidget({count}){
    return(
        <>
            <button
              type="button"
              className="p-1 text-2xl rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label="Cart"
            >
                <i className="fas fa-shopping-cart"></i>
                <p className="font-light text-sm">{`${count}`}</p>
            </button>
        </>
    )
    
}
export default CartWidget