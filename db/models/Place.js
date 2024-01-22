import mongoose from 'mongoose';
// import Comment from './Comment';
const { Schema } = mongoose;
import './User';

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: false },
  mapURL: { type: String, required: false },
  description: { type: String, required: false },
  // comments: { type: [Schema.Types.ObjectId], ref: Comment },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Place = mongoose.models.Place || mongoose.model('Place', placeSchema);

export default Place;
