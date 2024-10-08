import MenuItem from "./menu-item.jsx";
import "./style.css"
export default function  MenuList({list=[]}){
    return <ul className="menu-list-container">
        {
            list && list.length ? 
            list.map((listItem,index)=>(
                <MenuItem item={listItem} />
            ))
            :null
        }
    </ul>
}