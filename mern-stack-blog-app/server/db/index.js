const mongoose = require("mongoose");
mongoose.set("strict", false);
mongoose
  .connect('mongodb+srv://amiyo:hihello@cluster0.eq6m9.mongodb.net/')
  .then(() => console.log("connected to mongo db"))
  .catch((e) => console.log(e));
