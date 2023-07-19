import { useParams, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Product.scss";

function Product(props) {
    const {products, addToCart} = props;
    const { productTitle } = useParams();
    const productData = products.filter(product => product.title === productTitle)[0];
    console.log(products)
    console.log(productData)
    const navigate = useNavigate();

    return (
        <div className="product-render">
            <div id="background-color"></div>
            <button onClick={() => navigate(-1)}>&#60; Go Back</button>
            <div className="style-div">
                <div className="product-container">
                    <img
                        src={productData.coverSmall}
                        srcSet={`${productData.coverSmall} 263w, ${productData.coverMedium} 350w, ${productData.coverProduct1} 500w, ${productData.coverProduct2} 700w`}
                        sizes={`(max-width: 700px) 263px, (max-width: 1200px) 350px, (max-width: 1600px) 500px, (min-width: 1600px) 700px`}
                        alt={productData.title}
                        className={productData.id <= 8 ? "cdCover" : "vinylCover"}>
                    </img>
                    <div className="product-info">
                        <h3>{productTitle}</h3>
                        <p>{productData.description}</p>
                        <div className="buy-container">
                            <p>Price: {productData.price}$</p>
                            <button className="buy-btn" onClick={() => addToCart(productData)}>
                                Buy now
                                <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="shipping-details">
                    <h5>Shipping Details:</h5>
                    <p>Usually ships in 1 business days. This may be affected by holidays, promotions, local weather, etc.</p>
                </div>
            </div>
        </div>
    )
}

export default Product;