import data from './data.js';
import React ,{useState} from 'react';
import "./styles.css"

export default function Accordion(){
    const [selected,setSelected]= useState(null);
    const [multiSelection,setMultiSelection]= useState(false);
    const [multiple,setMultiple]= useState([]);

    function handleSingleClick(id){
        setSelected(id);

        if(selected===id){
            setSelected(null);
        }

    }
        function handleMultiSelection(id){
            let copyMultiple=[...multiple];
            const findIndexOfSelected = copyMultiple.indexOf(id);

            if(findIndexOfSelected===-1){
                copyMultiple.push(id);
            }
            else{
                copyMultiple.splice(findIndexOfSelected,1);
            }
            console.log(copyMultiple)

            setMultiple(copyMultiple);

        }
  

return( <div className='wrapper'>
    <button className="enable-multi" onClick={()=>setMultiSelection(!multiSelection)}>Enable Multi Selection</button>
    <div className="accordion">
        
        { data && data.length >0 ? (
        <div>
            {data.map( (dataItem,index)=>(
                <div className="item">
                    <div className="title" onClick={ multiSelection ? (()=> handleMultiSelection(dataItem.id) ):()=>handleSingleClick(dataItem.id)}>
                        <h2 key={index} >{dataItem.question}</h2>
                        <span>+</span>
                    </div>
                    {selected=== dataItem.id || multiple.indexOf(dataItem.id)!== -1 ? (<div className="content">{dataItem.answer}</div>):null}
                </div>
            ))}
        </div>)
        :<div>No data Found</div>}
    </div>
    </div>)
}