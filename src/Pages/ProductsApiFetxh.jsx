
import useFetch from './pure-functions/useFetch'

const ProductsApiFetxh = () => {

    const { data, loader } = useFetch('/api/products')
    console.log(data.products);
    return (
        <div>
            hello
            {
            }
        </div >
    )
}

export default ProductsApiFetxh