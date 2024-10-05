import Accordion from "./components/accordion/index.jsx"
import RandomColor from "./components/random-color/index.jsx"
import StarRating from "./components/star-rating/index.jsx"
import ImageUrl from "./components/image-slider/index.jsx"
import LoadMoreData from "./components/load-more/index.jsx"
import TreeView from "./components/tree-view/index.jsx"
import menus from "./components/tree-view/data.js"
import QrCodeGenerator from "./components/qr-code-generator/index.jsx"
import LightDarkMode from "./components/light-dark-mode/index.jsx"

function App() {
 
 
  return (
    <>
      {/* <Accordion />  */}
      {  /* <RandomColor /> */ }
      { /*  <StarRating noOfStars={10}/> */}
      { /*<ImageUrl url={'https://picsum.photos/v2/list'} limit={"10"}
       page={"1"}/>  */}
      {/*<LoadMoreData /> */}

      {/*<TreeView menus={menus} />*/}
       {/*  <QrCodeGenerator/> />*/}
       <LightDarkMode />
         </>
  )
}

export default App
