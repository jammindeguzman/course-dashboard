import { type Course } from "../types";
import { Users } from "lucide-react";

type Props = {
  course: Course & { enrolledCount: number };
};

const CourseCard = ({ course }: Props) => {
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
      <p className="text-sm text-gray-600 mt-2">{course.description}</p>
      <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
        <Users className="w-4 h-4" />
        <span>{course.enrolledCount} enrolled</span>
      </div>
    </div>
  );
};

export default CourseCard;
