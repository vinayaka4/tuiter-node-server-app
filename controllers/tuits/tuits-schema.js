import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes:Number,
  liked: Boolean,
  dislikes:Number,
  handle:String,
  username:String,
  retuits:Number,
  replies:String,
  profilepic:String
}, {collection: 'tuits'});
export default schema;

