import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/:courseId', async (req, res) => {
  const { courseId } = req.params;
  try {
    const users = await User.find({ enrolledCourses: courseId });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
});

export default router;