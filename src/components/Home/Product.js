import React from 'react'
import { Link } from 'react-router-dom';
import orangeArrow from '../../icons/orangeArrow.svg'

const ProductCard = ({ products = [] }) => {
  return (
    <>
          {
            products.map((product) => {
              console.log(product, 'product')
              const { id, title, category, image } = product;
              return (
                // <Link to={`/products/${id}`} >
                  <Link to={`/products/${id}`} className="lg:w-[33%] md:w-1/3 p-8 py-16 h-[600px] bg-white max-w-[400px] flex flex-col justify-end mb-3">
                    {/* <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />

                    </a> */}
                    <img alt={title} className=" object-contain object-center h-[55%] block mb-12" src={image} />

                    {/* <div className="mt-4 flex flex-col justify-between"> */}
                        <h3 className="text-[#9A9AB0] text-xs tracking-widest title-font mb-1 font-bold">{category}</h3>
                        <h2 className="text-gray-900 title-font text-3xl font-bold mt-3 truncate">{title}</h2>
                        <img src={orangeArrow} className="inline-block h-10 w-10 mt-10" alt="pointer-icon" />
                    {/* </div> */}
                    </Link>
                // {/* </Link> */}
              )
            })
          }
      </>
  )
}

export default ProductCard