import MenuList from "./menu-list";
import React,{useState} from 'react';
import {FaMinus , FaPlus} from 'react-icons/fa';
import "./style.css"

export default function MenuItem({item}){
    const [displayCurrentChildren,setDisplayCurrentChildren]= useState({});
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
        console.log(displayCurrentChildren)
    }

    return <li className="menu-item">
        <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length >0 ? <span onClick={()=>handleToggleChildren(item.label)}>
                {displayCurrentChildren[item.label] ? <FaMinus />:<FaPlus />}
            </span>
            :null
        }
        </div>
        {
            item && item.children && item.children.length >0 && displayCurrentChildren[item.label]? (
            <MenuList list={item.children}/>
            )
            : null
        }
    </li>
}