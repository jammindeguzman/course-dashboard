import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
});

export default mongoose.model('Course', courseSchema);