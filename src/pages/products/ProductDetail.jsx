import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ProductDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const getSingleProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
      setProduct(res.data)
    }).catch(err => console.log(err))
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <h1 className=' text-center'>Details</h1>
            <hr />

            <div className="row g-4 my-3">
              {product === null ?
                (
                  <div className="col-12 d-flex justify-content-center">
                    <div className="loader"></div>
                  </div>
                ) :
                (
                  <>
                    <div className="col-12 col-md-6">
                      <div className="image-container">
                        <img src={product.image} alt="" className='img-fluid' />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <h3>{product.title}</h3>
                      <div className='my-3'>
                        <strong className='text-success'>{product.price} €</strong>
                      </div>
                      <div className='my-3'>
                        <em>{product.category}</em>
                      </div>
                      <p>{product.description}</p>

                      <div className="row my-5 justify-content-start">
                        <div className="col-auto">
                          <button
                            className='btn btn-primary'
                            onClick={() => {
                              navigate(`/products/${parseInt(id) - 1}`)
                            }}
                            disabled={id == 1 ? true : false}
                          >
                            Prev
                          </button>
                        </div>
                        <div className="col-auto">
                          <button
                            className='btn btn-primary'
                            onClick={() => {
                              navigate(`/products/${parseInt(id) + 1}`)
                            }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </>

                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
