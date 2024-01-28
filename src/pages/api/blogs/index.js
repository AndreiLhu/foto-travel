import dbConnect from '../../../../db/connect';
import Blog from '../../../../db/models/Blog';

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === 'GET') {
    const blogs = await Blog.find();
    return response.status(200).json(blogs);
  }
  if (request.method === 'POST') {
    try {
      const blogData = request.body;
      await Blog.create(blogData);

      return response.status(201).json({ status: 'Blog created.' });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}
