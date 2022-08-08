import { Student } from 'src/models/student.model';
import { createReducer, on } from '@ngrx/store';
import { StudentState } from 'src/states/student.states';
import * as StudentActions from 'src/actions/student.action';
import { state } from '@angular/animations';
const initialState: StudentState = {
  students: [],
  error: '',
  isSuccess: true,
  isLoading: false,
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.addStudent, (state)=>{
    return {...state, isLoading: true};
  }),
  on(StudentActions.addStudentSuccess, (state)=>({
    ...state,
    isLoading: true,
  })),
  on(StudentActions.addStudentFail, (state,{error})=>({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),

  on(StudentActions.getStudent, (state)=>({
    ...state,
    isLoading: true,
   error: '',
  })),
  on(StudentActions.getStudentSuccess, (state, {students})=>({
    ...state,
    isLoading: false,
    error: "",
    students: students

  })),
  on(StudentActions.getStudentFail, (state,{error})=>({
    ...state,
    isLoading: false,
    error: error,
    // isSuccess: true,
  })),
);
