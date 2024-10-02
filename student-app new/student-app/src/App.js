import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Student Management</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default App;
