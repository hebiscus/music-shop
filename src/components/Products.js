

function Products({ products }) {



    return(
        <div className="">
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
                        <img src={product.cover} alt={product.title}></img>
                        <h5>{product.title}</h5>
                        <p>{product.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products;