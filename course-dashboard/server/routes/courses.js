import express from 'express';
import Course from '../models/Course.js';
import User from '../models/User.js';

const router = express.Router();

// GET /api/courses
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    const courses = await Course.find();

    const enrichedCourses = courses.map((course) => {
      const enrolledCount = users.filter((user) =>
        user.enrolledCourses.includes(course._id.toString())
      ).length;

      return {
        _id: course._id,
        title: course.title,
        description: course.description,
        enrolledCount,
      };
    });

    res.json(enrichedCourses);
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

export default router;