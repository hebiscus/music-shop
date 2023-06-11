import "../styles/Product.scss";
import { useParams, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product({ products }) {
    const { productTitle } = useParams();
    const productData = products.filter(product => product.title === productTitle)[0];
    console.log(productData)
    const navigate = useNavigate();

    return (
        <div className="product-render">
            <div id="background-color"></div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="product-container">
                <img src={productData.cover} alt={productData.productTitle}></img>
                <h3>{productTitle}</h3>
                <p>{productData.description}</p>
                <div className="buy-container">
                    <p>Price: {productData.price}</p>
                    <button className="buy-btn">
                        Buy now
                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
                    </button>
                </div>
            </div>
            <div className="shipping-details">
                <h5>Shipping Details:</h5>
                <p>Usually ships in 1 business days. This may be affected by holidays, promotions, local weather, etc.</p>
            </div>
        </div>
    )
}

export default Product;