
export default function CheckoutItem ({item}) {
    const price = ("$"+item.quantity*item.price)
    return(
      <div className="transition flex flex-row w-2/3 pb-1 border-b-2 border-neutral-700 hover:border-neutral-600">
        <div className="flex-row w-72  text-lg dark:text-neutral-300">
              - {item.name}
        </div>
        <div className="flex flex-row items-center gap-6">
              <h3 className="font-medium text-center w-5 border-y-2 rounded-full border-violet-300 text-gray-800 dark:text-neutral-300">
               {item.quantity}
              </h3>
              <h3 className="text-lg  rounded-md border-b-2 border-violet-300 text-gray-800 dark:text-neutral-300">
              {price}
              </h3>
          </div>
      </div>
    )
}