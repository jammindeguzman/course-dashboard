export interface Course {
  _id: string;
  title: string;
  description: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}

export interface CourseWithCount extends Course {
  enrolledCount: number;
}