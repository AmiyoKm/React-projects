import React, { useState, useEffect } from 'react';
import "./scroll.css"


export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(url) {

        try {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();

            if (result && result.products && result.products.length > 0) {
                setLoading(false);
                setData(result.products);
            }

        } catch (e) {
            setErrorMsg(e.message);
            console.error(errorMsg);
            setLoading(false);
            return;
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)

        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        }
    }, [])

    function handleScrollPercentage() {

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    console.log(data, loading, scrollPercentage);
    return <div>
        <div className="top-container" >

            <h1>Custom Scroll Indicator</h1>
            
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
                </div>
          

        </div>

        <div className="data-container">
            {
                data && data.length > 0 ? data.map((dataItem, index) => (<p key={index}>{dataItem.title}</p>))

                    : null
            }
        </div>

    </div>
}