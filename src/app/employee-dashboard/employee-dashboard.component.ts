import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      firstname : new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      lastname : new FormControl ('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl ('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobilenumber: new FormControl ('', [Validators.required, Validators.pattern('[0-9]{10,12}$')]),
      salary: new FormControl ('', [Validators.required, Validators.pattern('[0-9]{2,50}$')])
    })

    this.getAllEmployee();
  }

  postEmployeeDetails() {
    if(this.formValue.valid) {
      this.employeeModelObj = this.formValue.value;
      this.api.postEmployee(this.employeeModelObj).subscribe((result)=>{
        alert("Employee Added Successfuly as " + this.formValue.value.firstname);
        let ref = document.getElementById("closeModal");
        ref?.click();
        this.formValue.reset();
      }, err=> {
        alert("Something Went Wrong.");
      })
    } else {}
  }

  getAllEmployee() {
    this.api.getAllEmployee().subscribe(res=>{
      this.employeeData = res
    })
  }
}
