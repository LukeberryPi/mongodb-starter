import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect(
  "mongodb+srv://lukeberrypi:lukeberrypi@cluster0.mh2spwi.mongodb.net/?retryWrites=true&w=majority",
);

const article = new Blog({
  title: "awesome post",
  slug: "awesome-post",
  published: true,
  content: "this is the best post ever",
  tags: ["featured", "beginner"],
});

await article.save();
const firstArticle = await Blog.findOne({});
console.log(firstArticle);
