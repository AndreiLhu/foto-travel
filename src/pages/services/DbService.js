// import dbConnect from '../../../db/connect';
// import { Image } from '../../../db/models/Image';
// import { createFrontendImageFromDbImage } from './ImageService';

// export const DbService = {
//   async createImage({ originalFilename, size, mimetype, binaryData }) {
//     await dbConnect();
//     const newImage = new Image({
//       originalFilename,
//       size,
//       mimetype,
//       binaryData,
//     });

//     await newImage.save();

//     return createFrontendImageFromDbImage(newImage);
//   },
//   async getImages() {
//     await dbConnect();
//     return (await Image.find()).map((image) =>
//       createFrontendImageFromDbImage(image)
//     );
//   },
// };
