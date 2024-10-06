import Tabs from "./tabs";
import './tabs.css' 
function RandomContent(){
    return <div>Random Content</div>
}

export default function TabTest(){

    const tabs =[
        {
            label: "Tab 1",
            content : <div>This is content for Tab 1</div>
        },{
        
            label: "Tab 2",
            content : <div>This is content for Tab 2</div>
            
        },{
        
            label: "Tab 3",
            content : <RandomContent />
            
        }
    ]
    function handleChange(currentTabIndex){
        console.log(currentTabIndex);

    } 
       return <Tabs tabsContent={tabs} onChange={handleChange}/>
}