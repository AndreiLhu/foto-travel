import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  originalFilename: String,
  mimetype: String,
  src: { type: String },
  size: Number,
  binaryData: Buffer,
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);
// export const FrontendImage = Image & { src: string };

export default Image;
