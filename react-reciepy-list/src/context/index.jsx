import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=cefc3172-15c8-4b9e-b956-7e06374b1207`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/")
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);

      setSearchParam("");
    }
  }
  function handleAddToFavorite(getCurrentItem){
    let copyFavoriteList= [...favoritesList];
    const index =   copyFavoriteList.findIndex(item => item.id === getCurrentItem.id)
    if(index===-1){
        copyFavoriteList.push(getCurrentItem)
      
    }
    else{
        copyFavoriteList.splice(index)
    }
    setFavoritesList(copyFavoriteList)
  }
 
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList, 
        setFavoritesList,
        handleAddToFavorite,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
