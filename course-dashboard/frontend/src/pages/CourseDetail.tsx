import React from 'react';
import { useParams } from 'react-router-dom';
import UserList from '../components/UserList';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  if (!courseId) return <p className="text-center text-red-500">Invalid course ID</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">📘 Course Details</h1>
      <UserList courseId={courseId} />
    </div>
  );
};

export default CourseDetail;