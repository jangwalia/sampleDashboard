import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherProfile from "./TeacherProfile";

const url = process.env.REACT_APP_SCHEDULER_API;

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      const result = Object.values(data);
      setTeachers(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className="w-full h-full grid grid-cols-3 ">
      {teachers.map((teacher) => (
        <TeacherProfile
          key={teacher.id}
          image={teacher.avatar}
          name={teacher.name}
        />
      ))}
    </div>
  );
}

export default TeacherList;
