import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addStudent, updateStudent} from '../feactures/StudentSlice'


const StudentForm = () => {
  const dispatch = useDispatch();
  const editingStudent = useSelector((state) => state.students.editingStudent);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setPhone(editingStudent.phone);
      setRollNo(editingStudent.rollNo);
    } else {
      resetForm();
    }
  }, [editingStudent]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setRollNo('');
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!emailPattern.test(email)) newErrors.email = 'Invalid email format';

    const phonePattern = /^[0-9]{10}$/;
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phonePattern.test(phone)) newErrors.phone = 'Phone number must be 10 digits';

    if (!rollNo.trim()) newErrors.rollNo = 'Roll number is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const studentData = {
        id: editingStudent ? editingStudent.id : Date.now(),
        name,
        email,
        phone,
        rollNo,
      };
      if (editingStudent) {
        dispatch(updateStudent(studentData));
      } else {
        dispatch(addStudent(studentData));
      }
      resetForm();
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <div>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter roll number"
        />
        {errors.rollNo && <p className="error">{errors.rollNo}</p>}
      </div>
      <button type="submit">{editingStudent ? 'Update' : 'Add'} Student</button>
    </form>
  );
};

export default StudentForm;
