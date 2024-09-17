import { Link } from "react-router-dom"
export default function Item ({product}) {
    return(
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div style={{backgroundImage:`url(${product.images[0]})`}} className="overflow-hidden h-52 flex flex-col justify-center bg-cover items-center bg-black-600 rounded-t-xl">
        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xl font-semibol dark:text-neutral-300 dark:hover:text-violet-200">
            {product.name}
          </span>
          <h3 className="text-l font-normal text-gray-800 dark:text-neutral-300">
            {product.price}
          </h3>
          <p className="mt-3 text-gray-500 hover:text-gray-100 dark:text-neutral-500 dark:hover:text-neutral-300 line-clamp-1 text-ellipsis">
            {product.description}
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <Link className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" to={`/product/${product.id}`}>
            Ver detalles
          </Link>
        </div>
      </div>
    )
}
