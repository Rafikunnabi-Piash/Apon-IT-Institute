
import { Student } from './types';

const STORAGE_KEY = 'apon_it_students';

export const getStudents = (): Student[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveStudent = (student: Student) => {
  const students = getStudents();
  const index = students.findIndex(s => s.id === student.id);
  if (index > -1) {
    students[index] = student;
  } else {
    students.push(student);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
};

export const deleteStudent = (id: string) => {
  const students = getStudents().filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
};

export const getStudentByCertId = (certId: string): Student | undefined => {
  return getStudents().find(s => s.certificateId === certId);
};

export const generateCertificateId = () => {
  return `APON-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
};
