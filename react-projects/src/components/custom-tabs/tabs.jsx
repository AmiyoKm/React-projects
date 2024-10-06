
import React ,{useState} from 'react'



export default function Tabs({tabsContent, onChange}) {

    const [currentIndex,setCurrentIndex]= useState(0);
    function handleOnClick(getCurrentIndex){
        setCurrentIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((tabItem, index) => (
                    <div onClick={()=>handleOnClick(index)}key={tabItem.label}  className={`tab-item ${currentIndex === index ? "active":""}`} >
                        <span className="label">{tabItem.label}</span>
                    </div>

                ))
            }

        </div>
        <div className="content" style={{color:"red"}}>
            {
                tabsContent[currentIndex] && tabsContent[currentIndex].content 
            }
        </div>
    </div>
}