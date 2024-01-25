import multer from 'multer';
import nextConnect from 'next-connect';
import middleware from '../../db/connect';
import Image from '../../db/models/Image';

const upload = multer({ dest: 'uploads/' });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry, something went wrong! ${error.message}` });
  },
});

apiRoute.use(middleware);

apiRoute.post(upload.single('image'), async (req, res) => {
  const { description } = req.body;
  const imagePath = req.file.path;

  try {
    await Image.create({ imagePath, description });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data to MongoDB' });
  }
});

export default apiRoute;
