import Accordion from "../accordion"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic tac toe"
import TreeView from "../tree-view"
import menus from "../tree-view/data"
import { featureFlagsContext } from "./context"
import React, { useContext } from 'react'




export default function FeatureFlags(){
    const {loading , enabledFlags} = useContext(featureFlagsContext);

    const componentToRender = [
        {
            key : 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },{
            key : 'showTicTacToeBoard',
            component: <TicTacToe/>
        },{
            key : 'showRandomColorGenerator',
            component: <RandomColor/>
        },{
            key : 'showAccordion',
            component: <Accordion/>
        },{
            key : 'showTreeView',
            component: <TreeView menus={menus}/>
        },
    ]
    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }
    if (loading) return <div>Loading data ! Please wait</div>
    return <div>
        <h1>This is Feature Flag</h1>
        {
            componentToRender.map(componentItem => checkEnabledFlags(componentItem.key)? componentItem.component:null)
        }
    </div>
}