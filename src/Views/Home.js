import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Components/HttpRequests';

function Home() {
    const url = `https://5f167faba346a00016738e1e.mockapi.io/api/products?page=1&&limit=10`;
    
    let products = useAxiosGet(url);
    let content = null;
    

    if (products.error) {
        content = <p> Error...!</p>
    }

    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content =
            products.data.map((product, key) =>
                <ProductCard product={product} key={key} />
            )

    }

    return (
        <div>
            <h1 className="font-bold">
                Best Sellers
             </h1>
            {content}
        </div>
    )
}


export default Home;