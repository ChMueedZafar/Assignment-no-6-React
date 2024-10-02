import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent,setEditingStudent } from '../feactures/StudentSlice';
const StudentList = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeStudent(id));
  };

  const handleEdit = (student) => {
    dispatch(setEditingStudent(student));
  };

  return (
    <ul className="student-list">
      {students.map((student) => (
        <li key={student.id}>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <button onClick={() => handleEdit(student)}>Edit</button>
          <button onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
