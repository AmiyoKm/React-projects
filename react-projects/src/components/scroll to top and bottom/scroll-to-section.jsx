import React, { useRef } from 'react';



export default function ScrollToSection(){
    const ref= useRef();
    const data=[
        {
            label: "First Card",
            style:{
                width:"100%",
                height:"600px",
                backgroundColor:"red",
                marginTop: "20px",
                color:"white"
            }
        },
        {
            label: "Second Card",
            style:{
                width:"100%",
                height:"600px",
                backgroundColor:"black",
                marginTop: "20px",
                color:"white"
            }
        },
        {
            label: "Third Card",
            style:{
                width:"100%",
                height:"600px",
                backgroundColor:"green",
                marginTop: "20px",
                color:"white"
            }
        },
        {
            label: "Fourth Card",
            style:{
                width:"100%",
                height:"600px",
                backgroundColor:"blue",
                marginTop: "20px",
                color:"white"
            }
        },
        {
            label: "Fifth Card",
            style:{
                width:"100%",
                height:"600px",
                backgroundColor:"yellow",
                marginTop: "20px",
                color:"white"
            }
        },
    ]
    function handleScroll(){
       let pos = ref.current.getBoundingClientRect().top;
       window.scrollTo({
        top: pos,
        behavior: "smooth"
       })
    }
    return <div>
        <h1>Scroll to a particular Section</h1>
        <button onClick={handleScroll}>Click To Scroll</button>
        {
            data.map((item,index)=>(<div ref={index === 3? ref: null }style={item.style}key={index}>{item.label}</div>))
        }
    </div>
}