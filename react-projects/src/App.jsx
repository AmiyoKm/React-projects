import Accordion from "./components/accordion/index.jsx"
import RandomColor from "./components/random-color/index.jsx"
import StarRating from "./components/star-rating/index.jsx"
import ImageUrl from "./components/image-slider/index.jsx"
import LoadMoreData from "./components/load-more/index.jsx"
import TreeView from "./components/tree-view/index.jsx"
import menus from "./components/tree-view/data.js"
import QrCodeGenerator from "./components/qr-code-generator/index.jsx"
import LightDarkMode from "./components/light-dark-mode/index.jsx"
import ScrollIndicator from "./components/scroll-indicator/index.jsx"
import TabTest from "./components/custom-tabs/tab-test.jsx"
import ModalTest from "./components/custom modal pop-up/modal-test.jsx"
import GitHubProfileFinder from "./components/github-profile-finder/index.jsx"
import SearchAutoComplete from "./components/search auto complete/index.jsx"
import TicTacToe from "./components/tic tac toe/index.jsx"
import FeatureFlagGlobalState from "./components/feature-flag/context/index.jsx"
import FeatureFlags from "./components/feature-flag/index.jsx"


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
       {/*  <QrCodeGenerator/> */}
        {/* <LightDarkMode />   */}
        {/*<ScrollIndicator url = {"https://dummyjson.com/products?limit=100"}/> */}

         {/* <TabTest />  */}
        {/* <ModalTest /> */}
         {/* <GitHubProfileFinder/> */}

         {/* <SearchAutoComplete /> */}
         {/* <TicTacToe/>  */}
         <FeatureFlagGlobalState>
          <FeatureFlags />
         </FeatureFlagGlobalState >
         </>
  )
}

export default App
