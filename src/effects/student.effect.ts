import { getStudentFail } from './../actions/student.action';
import * as StudentActons from "src/actions/student.action"
import { StudentService } from '../app/services/student.service';
import { Injectable } from '@angular/core';
import {  Actions, createEffect, ofType } from '@ngrx/effects';
import { from, switchMap, map, catchError , of } from 'rxjs';
import { Student } from "src/models/student.model";


@Injectable()
export class StudentEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}

  addStudent$ = createEffect(()=> this.actions$.pipe(
    ofType(StudentActons.addStudent),
    switchMap((action) => from(this.studentService.addStudent(action.student))),
    map(()=>StudentActons.addStudentSuccess()),
    catchError((error)=> {
      return of(StudentActons.addStudentFail({error: error }));
    })
    ));

    getStudents$ = createEffect(() => this.actions$.pipe(
      ofType(StudentActons.getStudent),
      switchMap(() => from(this.studentService.getAll())),
      map((snapshot) =>{
        let students = snapshot.map((doc)=> <Student>doc.data());
        return StudentActons.getStudentSuccess({students: students})
      }),
        catchError((error)=>{
          return of(StudentActons.getStudentFail({error: error}))
        })
    ));
}
