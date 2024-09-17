import { Link, useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import ItemCount from "../ItemCount";
import getProducts from "../../utils/getProducts";
export default function ItemDetailContainer(){
    const [addedQuantity, setAddedQuantity] = useState (0)
    const handleOnAdd = (quantity) =>{
        setAddedQuantity(quantity)
    }
    const [detail, setDetail] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        getProducts(id)
            .then(res => setDetail(res))
    }, [id])
    return(
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                <div data-hs-carousel='{
                    "loadingClasses": "opacity-0"
                }' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-96 rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div className="hs-carousel-slide">
                        <div className="flex justify-center h-full">
                        <img src={detail?.images[0]} className="overflow-hidden h-full flex flex-col object-contain justify-center items-center rounded-t-xl"/>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex justify-center h-full">
                        <img src={detail?.images[1]} className="overflow-hidden h-full flex flex-col object-contain justify-center items-center rounded-t-xl"/>
                        </div>                        
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex justify-center h-full">
                        <img src={detail?.images[2]} className="overflow-hidden h-full flex flex-col object-contain justify-center items-center rounded-t-xl"/>
                        </div>                        
                    </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 focus:outline-none rounded-s-lg dark:text-white">
                    <span className="text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 focus:outline-none rounded-e-lg dark:text-white">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    </span>
                </button>

                    <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                        <span className="hs-carousel-active:bg-gray-700 hs-carousel-active:border-gray-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-gray-500 dark:hs-carousel-active:border-gray-500"></span>
                        <span className="hs-carousel-active:bg-gray-700 hs-carousel-active:border-gray-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-gray-500 dark:hs-carousel-active:border-gray-500"></span>
                        <span className="hs-carousel-active:bg-gray-700 hs-carousel-active:border-gray-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-neutral-500 dark:hs-carousel-active:border-gray-500"></span>
                    </div>
                </div>
                </div>
                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                            {detail?.name}
                        </h2>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                            {detail?.price}
                        </p>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                        <p className="text-lg text-gray-700 dark:text-gray-200">
                            {detail?.description}
                        </p>
                        </div>
                        <div>
                            {
                                addedQuantity > 0 ? (
                                    <>
                                    <div className="first-line:font-semibold text-base mb-2">Listo! <br />Agregaste {addedQuantity} {detail.name} por ${addedQuantity*(parseInt(detail.price.replace('$', '')))} al carrito.</div>
                                    <Link to="/cart" className="border border-neutral-500 text-center block font-light text-base w-fit rounded-lg py-3 px-3 text-gray-600 hover:text-gray-600 hover:bg-violet-200 focus:outline-none focus:text-gray-400  dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:text-neutral-400">Ir al carrito</Link>
                                    </>
                                ) : (
                                    <ItemCount stock={detail?.stock} onAdd={(quantity)=> handleOnAdd(quantity)}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}