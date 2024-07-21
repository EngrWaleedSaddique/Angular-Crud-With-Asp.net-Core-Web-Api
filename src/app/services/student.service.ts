import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url="https://localhost:44384/api/Student/GetStudents";
  
  constructor(private http:HttpClient,private router:Router) {

   }
  //  showData():any{
  //   this.http.get(`https://localhost:44384/api/Student/GetStudents`).
  //   subscribe((result:any)=>{
  //     return result;
  //   });
  // }
  getStudents(){
    return this.http.get(this.url);
  }
  addStudentDatabase(data:any){
      return this.http.post("https://localhost:44384/api/Student/addStudent",data);
  }
  editStudent(id:number){

    return this.http.get(`https://localhost:44384/api/Student/editStudent?id=${id}`);
  }
  editStudentPost(data:any){
    this.http.post("https://localhost:44384/api/Student/editStudent",data).subscribe();
    this.router.navigate(["student"]);
  }
  deleteStudent(id:any){
    return this.http.delete(`https://localhost:44384/api/Student/deleteStudent?id=${id}`);
    
  }
}
