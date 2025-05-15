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
      <div className="container">

        <div className="row">
          <div className="col-12">
            <h1>Products</h1>
          </div>
        </div>

        <div className="row g-3">
          {products === null ? <div>Loading...</div>
            :
            <div className="row g-3">
              {products.map(product => (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={product.id}
                >
                  <div className="card h-100 d-flex flex-column">
                    <div className="card-image-top">
                      <img src={product.image} className='img-fluid' alt={product.description} />
                    </div>
                    <div className="card-body p-0">
                      <h5 className="bg-primary p-3 fw-semibold">
                        {product.title}
                      </h5>
                      <p className="my-2 text-center price">Price: € {product.price.toFixed(2, 0)}</p>
                      <p className="desc">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
        </div>
      </div>
    </>
  )
}

export default Products
