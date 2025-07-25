import axios from "axios";
import type { User } from "../types";

export const getCourses = () => axios.get(`${import.meta.env.VITE_API_URL}/api/courses`);

export async function fetchUsersByCourse(courseId: string): Promise<User[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${courseId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}