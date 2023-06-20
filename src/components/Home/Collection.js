import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductCard from "./Product";

function Collection() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=6')
        const data = await response.json()
        console.log(data)
        setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
            <h2 className="font-bold text-5xl leading-[120%] text-gray-900 tracking-wide text-center mb-11">
                Our Premium Collection
            </h2>
            
            <Categories />

            
          <div className="flex flex-wrap justify-between">
            {
                products.length > 0 ? 
                <ProductCard products={products} /> 
                :
                <div>Loading.....</div>
            }
            <div className="flex justify-center w-full mt-8">
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-base font-semibold mt-2">Find out more</button>
            </div>
            
    
          </div>
        </div>
      </section>
    );
  }

export default Collection;


