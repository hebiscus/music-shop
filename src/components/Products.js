import "../styles/Products.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";

function Products({ products }) {
    console.log(products)
    const [currentProducts, setCurrentProducts] = useState(products);

    function filterByGenre(e) {
        const genreFilter = e.target.innerText;
        if (genreFilter === "all") {
            setCurrentProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.genre === genreFilter);
            setCurrentProducts([...filteredProducts]);
        }
    };

    return(
        <div className="products-render">
            <div id="background-color"></div>
            <div className="genres-container">
                <h2>Genres</h2>
                <button onClick={filterByGenre}>all</button>
                <button onClick={filterByGenre}>new wave</button>
                <button onClick={filterByGenre}>math rock</button>
                <button onClick={filterByGenre}>art pop</button>
                <button onClick={filterByGenre}>electroclash</button>
                <button onClick={filterByGenre}>synthpop</button>
                <button onClick={filterByGenre}>ambient</button>
            </div>
            <div className="products-container">
                {currentProducts.map((product, index) => {
                    return <div key={index} className="product-div">
                        <Link to={product.title}>
                            <img src={product.coverSmall} alt={product.title}></img>
                            <p>{product.title}</p>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products;