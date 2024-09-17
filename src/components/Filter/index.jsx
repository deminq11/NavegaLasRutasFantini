import { useEffect, useState } from "react"
import Filter from "./filter"
export default function FilterProducts({children, items}){
    const [productFilter, setProductFilter] = useState("defecto")
    const [filteredItems, setFilteredItems] = useState(items)
    useEffect(()=>{
        setTimeout(() => {
            setFilteredItems([...(Filter(items, productFilter))])
        }, 500);
        
    }, [items, productFilter])

    return(
        <>
            <select
                value={productFilter}
                onChange={(e)=>setProductFilter(e.target.value)}
            >
                <option value="defecto">Por Defecto</option>
                <option value="menor-precio">Menor Precio</option>
                <option value="mayor-precio">Mayor Precio</option>
            </select>
            {children(filteredItems)}
        </>
    )
}