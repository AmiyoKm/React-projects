const express = require("express");
const blogRouter = express.Router();

const {
  fetchListOfBlogs,
  addNewBlog,
  updateABlog,
  deleteABlog,
} = require("../controller/blog-controller");

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.delete("/delete/:id", deleteABlog);
blogRouter.put("/update/:id", updateABlog);

module.exports = blogRouter;