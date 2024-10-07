

import React ,{useState , useRef} from 'react';
import useOutsideClick from '.';



export default function UseOnClickOutsideTest(){
    
    const ref = useRef();
    useOutsideClick(ref,()=>setShowContent(false));
    const [showContent, setShowContent] = useState(false)
    return <div>
        {
            showContent ? <div ref={ref}>
                <h1>This is a content</h1>
                <p>this click outside of this container to close this</p>
            </div> :<button onClick={()=>setShowContent(true)}>Show Content</button>
        }
    </div>
}