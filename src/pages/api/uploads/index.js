import multer from 'multer';
import middleware from '../../../../db/connect';
import Image from '../../../../db/models/Image';

const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

const apiRoute = async (req, res) => {
  await middleware(req, res);

  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const { description } = req.body;
      const imagePath = req.file.path;

      try {
        await Image.create({ imagePath, description });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ error: 'Error saving data to MongoDB' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default apiRoute;
