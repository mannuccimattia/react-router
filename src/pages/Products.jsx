import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"

import HeadNavbar from "../components/HeadNavbar"

const Products = () => {

  const [products, setProducts] = useState(null);

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HeadNavbar />
      <div>
        <h1>Products</h1>
      </div>
      <ul>
        {products === null ? <div>Loading...</div>
          :
          <div>
            {products.map(prod => (
              <li key={prod.id}>
                {prod.title}
              </li>
            ))}
          </div>}
      </ul>
    </>
  )
}

export default Products
