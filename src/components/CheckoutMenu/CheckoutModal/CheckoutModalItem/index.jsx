export default function CheckoutItem ({item}) {
    const price = ("$"+item.quantity*item.price)
    return(
        <>
        <div className="transition flex flex-row mt-3 border-b  border-neutral-700">
            <div className="flex-row w-72  text-base">
                - {item.name}
            </div>
            <div className="flex flex-row items-center gap-5">
                <h3 className="font-medium text-center  rounded-full text-gray-800 dark:text-neutral-400">
                {item.quantity}
                </h3>
                <h3 className="rounded-md text-gray-800 dark:text-neutral-300">
                {price}
                </h3>
            </div>
        </div>
        </>
    )
}