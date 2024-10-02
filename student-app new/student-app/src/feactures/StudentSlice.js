import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  editingStudent: null,
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    setEditingStudent: (state, action) => {
      state.editingStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const { id, name, email, phone, rollNo } = action.payload;
      const existingStudent = state.students.find(student => student.id === id);
      if (existingStudent) {
        existingStudent.name = name;
        existingStudent.email = email;
        existingStudent.phone = phone;
        existingStudent.rollNo = rollNo;
      }
      state.editingStudent = null;
    },
  },
});

export const { addStudent, removeStudent, setEditingStudent, updateStudent } = studentSlice.actions;

export default studentSlice.reducer;
