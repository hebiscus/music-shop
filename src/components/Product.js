import { useLocation } from "react-router-dom";

function Product() {
    let { state } = useLocation();

    return (
        <>
        {state.title}
        </>
    )
}

export default Product;