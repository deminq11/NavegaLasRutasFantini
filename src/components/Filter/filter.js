export default function Filter(items, productFilter){
    let filteredItems = items
    if(productFilter == "mayor-precio"){
        filteredItems.sort((a, b) =>{
            let precioA = parseInt(a.price.replace('$', ''));
            let precioB = parseInt(b.price.replace('$', ''));
            return precioB - precioA;
        })
    }
    else if(productFilter == "menor-precio"){
        filteredItems.sort((a, b) =>{
            let precioA = parseInt(a.price.replace('$', ''));
            let precioB = parseInt(b.price.replace('$', ''));
            return precioA - precioB;
        })
    }
    else if(productFilter == "defecto"){
        filteredItems.sort((a, b) =>{
            return a.id - b.id;
        })
    }
    return filteredItems
}