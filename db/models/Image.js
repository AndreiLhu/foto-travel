import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema({
  imagePath: String,
  description: String,
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;
