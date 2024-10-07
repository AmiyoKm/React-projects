import useFetch from ".";
import React , {useState} from 'react';




export default function UseFetchHookTest(){

    const { data , error , pending}= useFetch("https://dummyjson.com/products",{});
    const [display,setDisplay] = useState(false);
    console.log(error,data,pending);
    const handleFetchButton =  ()=>{
        setDisplay(!display);
    }

    return <div>
        <h1>Fetch Hook</h1>
        {
            pending ? <h3>Pending ! Please Wait</h3> :null
        }
        {
            error? <h3>Error: {error.message}</h3> : null
        }
        <button onClick={handleFetchButton}>Get Items</button>
        {
            display && data && data.products && data.products.length> 0 ?
            data.products.map((productItem,index)=>(
                <p>{productItem.title}</p>
            )):null
        }
    </div>
    
    }
