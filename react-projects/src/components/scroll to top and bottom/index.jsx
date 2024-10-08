import { useRef } from "react";
import useFetch from "../useFetch";




export default function ScrollToTopAndBottom(){
    const {data , error , pending}= useFetch("https://dummyjson.com/products?limit=100",{})
    const bottomRef = useRef(null);
    function handleScrollTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    function handleScrollBottom(){
       bottomRef.current.scrollIntoView({behavior: "smooth"});
    }

    return <div style={{display:"flex",justifyContent:"center",flexDirection:"column",fontSize:"3rem",alignItems:"center"}}>
        <h1>Scroll to Top and Bottom</h1>
        {
            pending? <h3>Pending! Please Wait</h3> : null
        }
        {
            error? <h3>Error! {error.message}</h3> : null
        }
        <button onClick={handleScrollBottom} >Scroll to Bottom</button>
        <ul>
        {
            data && data.products && data.products.length >0 ?
            data.products.map((productItem,index)=>(
                <li key={index}>{productItem.title}</li>
            ))
            :null
        }
         <button ref={bottomRef} onClick={handleScrollTop}>Scroll to Bottom</button>
        </ul>
    </div>
}