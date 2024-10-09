import { useState ,useEffect } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../component/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (e) {
      return <div>{e.message}</div>;
    }
  }
  useEffect(() => {
    fetchListOfProducts();

    return () => {};
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles height={"120"} width={"120"} color={"red"} visible={true} />
        </div>
      ) :  <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {
                products && products.length>0 ?
                products.map((productItem , index)=>( <ProductTile key={index} product={productItem} /> )) :null
            }

      </div>  }
    </div>
  );
}
