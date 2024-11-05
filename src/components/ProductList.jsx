import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);


    fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((json)=>{
            setProducts(json);
        }).catch((err)=>{
            setError(err);
            console.error(error);
        })
    
            

    return (
        <>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.title} width="100" />
                    <p>{product.description}</p>
                    <Link to={`/product/${product.id}`}>
                        <button>Buy Now</button>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    );    
}

export default ProductList;