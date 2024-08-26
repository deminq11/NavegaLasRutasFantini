
function ItemList({greeting}){
    return(
        <section class="py-4 mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            Lista de mercadería para distribuidores y clientes.</h2>
            <p class="mt-3 text-gray-800 dark:text-neutral-200">{greeting}</p>
        </section>           
    )
}
export default ItemList