import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ProductDetail = () => {

  const { id } = useParams();

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

            <div className="row g-4 mt-3">
              {product === null ?
                (
                  <div className="col-12 d-flex justify-content-center">
                    <div className="loader"></div>
                  </div>
                ) :
                (
                  <div className="col-12">
                    <div className="image-container">
                      <img src={product.image} alt="" className='img-fluid' />
                    </div>
                    <h1>{product.title}</h1>
                    <div className='my-3 text-center'>
                      <em>{product.price} €</em>
                    </div>
                    <div className='my-3 text-center'>
                      <strong>{product.category}</strong>
                    </div>
                    <p>{product.description}</p>
                  </div>
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
