import "./style.css"
import React, { useState, useEffect } from "react";;
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export default function ImageUrl({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url) {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setLoading(false);
                setImages(data);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        if (url != "") {
            fetchImages(url)
        }

    }, [url, page, limit])

    console.log(images)

    if (loading) {
        return <div>Loading data please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error: {errorMsg}</div>
    }
    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={() => handlePrevious()} className="arrow arrow-left" />
        {(images && images.length) ? images.map((imageItem, index) => (
            <img
                key={index}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : "current-image hide-image"}

            />
        )) : null}
        <BsArrowRightCircleFill onClick={() => handleNext()} className="arrow arrow-right" />
        <span className="circle-indicator">
            {images && images.length ? images.map((_, index) =>
            (
                <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator hide-indicator"}
                    onClick={() => setCurrentSlide(index)}></button>
            )) : null}
        </span>
    </div>
}