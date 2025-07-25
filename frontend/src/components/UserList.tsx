import React, { useEffect, useState } from 'react';
import { fetchUsersByCourse } from '../api';
import type { User } from '../types';

interface Props {
  courseId: string;
}

const UserList: React.FC<Props> = ({ courseId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsersByCourse(courseId);
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [courseId]);

  if (loading) return <p className="text-gray-500">Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 border rounded-xl bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Enrolled Users</h2>
      {users.length === 0 ? (
        <p className="text-sm text-gray-600">No users enrolled in this course.</p>
      ) : (
        <ul className="space-y-1 text-sm">
          {users.map((user, idx) => (
            <li key={idx} className="text-gray-800">
              👤 {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;