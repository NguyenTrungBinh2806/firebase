export interface Student{
  id: string;
  name: string;
  email: string;
  dob: string;
  phone: {
    code: string;
    number: string;
  }
}
