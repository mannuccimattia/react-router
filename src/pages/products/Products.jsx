import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"

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
      <div className="container">

        <div className="row">
          <div className="col-12">
            <h1>Products</h1>
          </div>
        </div>
        <hr />

        <div className="row g-4 mt-3">
          {products === null ? <div className="col-12 d-flex justify-content-center">
            <div className="loader"></div>
          </div>
            :
            <>
              {
                products.map(product => (
                  <div
                    className="col-12 col-md-6 col-lg-4"
                    key={product.id}
                  >
                    <div className="card h-100 d-flex flex-column">
                      <div className="card-img-top">
                        <img src={product.image} className='img-fluid' alt={product.description} />
                      </div>
                      <div className="card-body p-0">
                        <div className="card-title-wrapper">
                          <h5 className="bg-primary p-3 fw-semibold">
                            {product.title}
                          </h5>
                        </div>
                        <p className="my-2 text-center price">Price: € {product.price.toFixed(2, 0)}</p>
                        <div className="text-center">
                          <NavLink
                            className="btn btn-primary my-4"
                            to={`/products/${product.id}`}
                          >
                            Dettagli
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className="row justify-content-center">
                <div className="col-auto">
                  <a
                    href="#"
                    className="btn btn-secondary my-4"
                    to={`/products`}
                  >
                    Torna Su
                  </a>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Products
