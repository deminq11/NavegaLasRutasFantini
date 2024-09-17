export default async function getProducts(id){
  try{
    const response = await fetch("../src/assets/productos.json")
    const products = await response.json()
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(id){
            const productByID = products.find(product=> product.id == id)
            if(productByID){
              resolve(productByID)
            }else{
              const productsByCategory = products.filter(product => 
                product.characteristics.some(characteristic => characteristic == id)
              );
              if(productsByCategory){
                resolve(productsByCategory)
              }else{
              reject(new Error(`Product with id:${id} not found`))
              }
            }
        }else{
            resolve(products)
        }
      }, 500)
    })
  }catch(error){
    return Promise.reject(new Error(`An error occurred: ${error.message}`));
  }
}