import { useParams } from "react-router-dom";

function Product({ products }) {
    const { productTitle } = useParams();
    const productData = products.filter(product => product.title === productTitle)

    return (
        <>
        {productTitle}
        </>
    )
}

export default Product;