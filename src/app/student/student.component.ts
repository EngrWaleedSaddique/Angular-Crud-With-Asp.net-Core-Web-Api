import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any;
  constructor(private student:StudentService,private router:Router) {

   }

  ngOnInit(): void {
    this.student.getStudents().subscribe(response=>{
      this.students=response;
    });
    }

    addStudent(data:any){
      this.student.addStudentDatabase(data).subscribe(response=>{
        this.students=response;
      });
      //below code is to refresh the component with new data
      
    }
    deleteStudent(id:number){
      this.student.deleteStudent(id).subscribe(response=>{
        this.students=response;
      });
    }
      
      

    }
