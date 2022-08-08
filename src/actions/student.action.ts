import { Student } from './../models/student.model';
import { createAction, props } from '@ngrx/store';

export const addStudent = createAction(
  '[Student] Add Student',
  props<{ student: Student }>()
);

export const addStudentSuccess = createAction(
  '[Student] Add Student Success',

);

export const addStudentFail = createAction(
  '[Student] Add Student Fail',
  props<{ error: string }>()
);

export const getStudent= createAction(
  '[Student] get Student',
);

export const getStudentSuccess = createAction(
  '[Student] get Student Success',
  props<{ students: Student[] }>()
);

export const getStudentFail = createAction(
  '[Student] get Student Fail',
  props<{ error: string }>()
);
