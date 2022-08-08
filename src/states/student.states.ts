import { Student } from './../models/student.model';
export interface StudentState{
  students: Student[];
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
