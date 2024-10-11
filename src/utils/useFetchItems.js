import { useEffect, useState } from "react"
import getProducts from "./getProducts" 

const useFetchItems = (id) => {
    const [items, setItems] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let isMounted = true
        const fetchItems = async () => {
            setIsLoading(true)
            try {
                const fetchedItems = await getProducts(id);
                if (isMounted) {
                    setItems(fetchedItems);
                }
            } catch (error) {
                if (isMounted) {
                    console.error(`Fetch failed: ${error.message}`)
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false)
                }
            }
        }
        fetchItems()
        return () => {
            isMounted = false
        }
    }, [id])
    return { items, isLoading }
}
export default useFetchItems