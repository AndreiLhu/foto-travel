import dbConnect from '../../../../db/connect';
import Place from '../../../../db/models/Place';

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === 'GET') {
    const images = await Place.find();
    return response.status(200).json(images);
  } else {
    return response.status(405).json({ message: 'Method not allowed' });
  }
}
