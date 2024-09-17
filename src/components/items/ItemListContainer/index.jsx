import ItemList from "../ItemList";
import Filter  from "../../Filter"
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import getProducts from "../../utils/getProducts";


function ItemListContainer(){
    const [items , setItems] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        getProducts(id)
            .then(res => setItems(res))
    }, [id])
    return(
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h2 className="pb-5 text-center text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            Productos</h2>
            <Filter items={items}>
                {(filteredItems)=>(
                    <ItemList items={filteredItems}/>
                )}           
            </Filter>
        </div>           
    )
}
export default ItemListContainer