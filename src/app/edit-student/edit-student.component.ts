import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  tempStudent:any;
  id:any;
  constructor(private student:StudentService,private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.student.editStudent(this.id).subscribe(response=>{
      this.tempStudent=response;
      console.log(this.tempStudent);
    });
  }
  editStudent(data:any){
    this.student.editStudentPost(data);
  }


}
