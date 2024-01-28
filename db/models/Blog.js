import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
});

const Blog = models.Blog || model('Blog', blogSchema);

export default Blog;
