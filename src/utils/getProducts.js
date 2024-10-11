import {collection, doc, getDocs } from 'firebase/firestore';
import {db} from  "../firebase/db"
export default async function getProducts(id){
  try {
    const productsCollection = collection(db, "products");
    const productDocsSnapshot = await getDocs(productsCollection);
    const products = productDocsSnapshot.docs.map((doc) => doc.data());
    return new Promise(async(resolve)=> {
    if (id) {
      const productByID = products.find((product) => product.id == id);
      if (productByID) {
        resolve(productByID)
      } else {
        const productsByCategory = products.filter((product) =>
        product.characteristics?.some((characteristic) => characteristic == id)
        )
        if (productsByCategory.length > 0) {
          resolve(productsByCategory)
        } else {
          throw new Error(`Product with ID: ${id} not found`)
        }
      }
    } else {
      resolve(products)
    }})
  } catch (error) {
    console.error("Error fetching products:", error)
    return Promise.reject(new Error("An error occurred while getting products"))
  }
}