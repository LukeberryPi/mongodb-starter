import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect(
  "mongodb+srv://lukeberrypi:lukeberrypi@cluster0.mh2spwi.mongodb.net/?retryWrites=true&w=majority",
);

// method 1 for inserting data
const article1 = new Blog({
  title: "awesome post",
  slug: "awesome-post",
  author: "luke berry", // required since schema validation
  published: true,
  content: "this is the best post ever",
  tags: ["featured", "beginner"],
});

await article1.save();

// find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);

// method 2 for inserting data
const article2 = await Blog.create({
  title: "awesome post 2",
  slug: "awesome-post-2",
  author: "luke berry", // required since schema validation
  published: true,
  content: "this is the second best post ever",
  tags: ["featured", "beginner"],
});

console.log(article2);

// updating data
article1.title = "new title";
await article1.save();
console.log(article1);

// finding data
const articleById = await Blog.findById("65b9cf38675b9d5bbbe2239f").exec();
console.log(articleById);

// projecting document fields
// can be "title slug content", string[] (as below) or object notation
const articleSlice = await Blog.findById("65b9cf38675b9d5bbbe2239f", [
  "title",
  "slug",
  "content",
]).exec();
console.log(articleSlice);

// deleting data
const deletedByTitle = await Blog.deleteOne({ title: "new title" });
console.log(deletedByTitle);

const multipleDeletedByAuthor = await Blog.deleteMany({ author: "luke berry" });
console.log(multipleDeletedByAuthor);

// other useful methods
const existsFromAuthor = await Blog.exists({ author: "luke berry" });
console.log("exists from author luke berry:", existsFromAuthor); // why null? i expected false
