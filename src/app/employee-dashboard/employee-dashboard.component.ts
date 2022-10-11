import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeDashboardModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !:FormGroup;

  employeeModelObj:EmployeeDashboardModel = new EmployeeDashboardModel();

  employeeData !:any;

  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    console.log(this.formValue);
    this.formValue = this.formbuilder.group({
      firstname : ('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      lastname : [''],
      email: [''],
      mobilenumber: [''],
      salary: ['']
    })
    this.getAllEmployee();
  }

  postEmployeeDetails() {
    this.employeeModelObj = this.formValue.value;

    this.api.postEmployee(this.employeeModelObj).subscribe((result)=>{
      alert("Employee Added Successfuly as " + this.formValue.value.firstname);
      let ref = document.getElementById("closeModal");
      ref?.click();
      this.formValue.reset();
    }, err=> {
      alert("Something Went Wrong.");
    })
  }

  getAllEmployee() {
    this.api.getAllEmployee().subscribe(res=>{
      this.employeeData = res
    })
  }
}
