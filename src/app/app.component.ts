import { Student } from 'src/models/student.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentState } from 'src/states/student.states';
import * as StudentActions from 'src/actions/student.action'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  studentState$ = this.store.select('student');
  students$ =  this.store.select((state)=>state.student.students);
  currentStudent: Student={
    id: '',
    name: '',
    email: '',
    dob: '',
    phone: { code:'', number: '' }
  }

  constructor(private store: Store<{ student: StudentState }>) {}
  res:StudentState = {
    error:'',
    isLoading: true,
    isSuccess: false,
    students:[]
  }

  ngOnInit(): void {
    this.studentState$.subscribe(state =>{
      // this.res = state
      console.log(state);
    });

    this.store.dispatch(
      StudentActions.addStudent({
        student: {
          name: 'Binh Nguyen',
          id: '3',
          dob: '8/8/2022',
          email: 'binh.nt2064@sinhvien.hoasen.edu.vn',
          phone: { code: '+84', number: '45612378' },
        },
      })
    );
     this.store.dispatch(StudentActions.getStudent());

  }
  addNewStu(){
    this.store.dispatch(StudentActions.addStudent({student: this.currentStudent}));
  }
}
