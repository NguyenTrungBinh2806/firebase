import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, Firestore, getDocs } from '@angular/fire/firestore';
import { doc, setDoc } from '@firebase/firestore';
import { Student } from 'src/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private db: Firestore) {}
  addStudent(student: Student) {
    if (!student.id) {
      throw new Error('Students is required');
    }
    return setDoc(doc(this.db, 'students/' + student.id), student);
  }
  getAll(){
    return collectionSnapshots(collection(this.db, 'students'));
  }
}
