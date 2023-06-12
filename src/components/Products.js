import "../styles/Products.scss";
import { Link } from 'react-router-dom';

function Products({ products }) {

    return(
        <div className="products-render">
            <div id="background-color"></div>
            <div className="genres-container">
                <h2>Genres</h2>
                <button>new wave</button>
                <button>math rock</button>
                <button>art pop</button>
                <button>electroclash</button>
                <button>synthpop</button>
                <button>ambient</button>
            </div>
            <div className="products-container">
                {products.map((product, index) => {
                    return <div key={index}>
                        <Link to={product.title}>
                            <img src={product.coverSmall} alt={product.title}></img>
                            <h5>{product.title}</h5>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products;