import { useEffect, useState } from "react";
import axios from "axios";
import CourseTable from "./components/CourseTable";
import type { CourseWithCount } from "./types";

const App = () => {
  const [courses, setCourses] = useState<CourseWithCount[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get<CourseWithCount[]>(
          `${import.meta.env.VITE_API_URL}/api/courses`
        );

        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Course Dashboard</h1>
        <CourseTable courses={courses} />
      </div>
    </main>

  );
};

export default App;
