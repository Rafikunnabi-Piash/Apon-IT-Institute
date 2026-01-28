
export interface Student {
  id: string;
  name: string;
  course: string;
  duration: string;
  grade: string;
  issueDate: string;
  status: 'Active' | 'Revoked';
  photo: string;
  certificateId: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  syllabus: string[];
}
