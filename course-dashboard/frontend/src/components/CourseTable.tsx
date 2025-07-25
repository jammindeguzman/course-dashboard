import React from "react";
import type { CourseWithCount } from "../types";
import { Users } from "lucide-react";

type CourseTableProps = {
  courses: CourseWithCount[];
};

const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Enrollments
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {courses.map((course) => (
            <tr key={course._id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-gray-900">{course.title}</div>
                <div className="text-sm text-gray-500">{course.description}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users className="w-4 h-4 text-gray-400" />
                  {course.enrolledCount}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;