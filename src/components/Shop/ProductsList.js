import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters'

function ProductLists() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=8')
        const data = await response.json()
        console.log(data)
        setProducts(data)
        }
        fetchProducts()
    }, [])

    
    useEffect(() => {
        const fetchCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        console.log(data)
        setCategories(data)
        }
        fetchCategories()
    }, [])

    return (
        <>
      <div className='container flex'>
        <div className='lg:w-1/4'>
            <Filters categories={categories} />
        </div>
        <div className='lg:w-3/4'>
            <div className='flex flex-wrap '>
                {
                    products.length > 0 ? 
                    <ProductCard products={products} /> 
                    :
                    <div>Loading.....</div>
                }
                {/* <ProductCard />
                <ProductCard /> */}
            </div>
            <div className="flex justify-center pr-24">
                <button className="inline-flex text-white bg-orange-500 border-0 py-3 px-6 focus:outline-none hover:bg-orange-600 rounded text-base font-semibold my-10">
                See more
                </button>
            </div>
        </div>
        
        
      </div>
      
      </>
    );
  }
  
  export default ProductLists;
  