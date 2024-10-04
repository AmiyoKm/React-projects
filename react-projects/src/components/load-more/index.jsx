import React, { useState, useEffect } from 'react';
import './styles.css'

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false)
    async function fetchProducts() {

        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=${count === 3 ? 0 : 20}&skip=${count === 0 ? 0 : count * 20}`);

            const result = await response.json();

            if (result && result.products && result.products.length) {

                setProducts((prevData)=> [...prevData,...result.products] );
                setLoading(false);

            }
            console.log(result);
        }
        catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if(products &&products.length>=100)setDisable(true)
    }, [products]);

    if (loading) {
        return <div>Loading...</div>
    }
    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ?
                    products.map((item, index) => (
                        <div className="product" key={index}>
                            <img src={item.thumbnail} alt={item.item} />
                            <p>{item.title}</p>

                        </div>
                    ))
                    : null
            }
        </div>
            <div disable={disable}className="button-container">
                <button onClick={count<=3? ()=>setCount(count+1): null}>Load More</button>
                {
                    disable?
                        <p>No more products to load</p>
                        : null
                }
            </div>
    </div>

}