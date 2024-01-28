import dbConnect from '../../../../../db/connect';
import Blog from '../../../../../db/models/Blog';

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === 'GET') {
    const blog = await Blog.findById(id);

    if (!blog) {
      return response.status(404).json({ status: 'Not found' });
    }

    return response.status(200).json(blog);
  }

  if (request.method === 'DELETE') {
    await Blog.findByIdAndDelete(id);

    response.status(200).json({ message: 'Success!' });
  }
}
