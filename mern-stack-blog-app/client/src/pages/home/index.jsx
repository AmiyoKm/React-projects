import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import classes from "./styles.module.css";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;
    console.log(result);
    if (result) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }
  async function handleDeleteBlog(getCurrentID) {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentID}`
    );
    const result = await response.data;
    console.log(result);
    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0)
    }
  }
  function handleEditBlog(getCurrentBlogItem){
    navigate("./add-blog" , {state :{getCurrentBlogItem}})

  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);
  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem._id}>
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <FaEdit onClick={()=> handleEditBlog(blogItem)}size={30} />
                <FaTrash
                  onClick={() => handleDeleteBlog(blogItem._id)}
                  size={30}
                />
              </div>
            ))
          ) : (
            <h3>No Blog</h3>
          )}
        </div>
      )}
    </div>
  );
}
