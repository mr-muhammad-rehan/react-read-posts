import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard'

function Home() {

    let content = null;

    const url = `https://5f167faba346a00016738e1e.mockapi.io/api/products?page=1&&limit=10`;
    const [products, setProducts] = useState({
        loading: false,
        data: null
    });


    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then((response) => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                });
            })
            .catch((error) => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                });
            })
    }, [url])

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