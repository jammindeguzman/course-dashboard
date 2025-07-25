import React from "react";
import UserList from "./UserList";

interface CourseEnrolleesProps {
  courseId: string;
  onClose: () => void;
}

const CourseEnrollees: React.FC<CourseEnrolleesProps> = ({ courseId, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <UserList courseId={courseId} />
      </div>
    </div>
  );
};

export default CourseEnrollees;