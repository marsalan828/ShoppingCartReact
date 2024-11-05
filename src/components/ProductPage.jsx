import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductPage() {
    const { productId } =useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
          .then((res) => res.json())
          .then((json) => setProduct(json))
          .catch((err) => {
            setError(err);
            console.error(error);
          });
      }, [productId]);
      
    if (error) return <p>Error loading product: {error.message}</p>;
    if (!product) return <p>Loading product details...</p>;

    return (
        <>
        <div>
            <Link to={'/'}>
                <button>Back</button>
            </Link>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="200" />
            <p>{product.description}</p>
            <Link to={''}>
                <button>Add To Cart</button>
            </Link>
        </div>
        </>
    );
}

export default ProductPage;