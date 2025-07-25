import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  enrolledCourses: [String],
});

export default mongoose.model('User', userSchema);