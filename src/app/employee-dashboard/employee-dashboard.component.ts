import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
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
  showAdd !:boolean;
  showUpdate !:boolean;


  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname : new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      lastname : new FormControl ('', [Validators.maxLength(30)]),
      email: new FormControl ('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.email]),
      mobilenumber: new FormControl ('', [Validators.required, Validators.pattern('[0-9]{10,12}$')]),
      salary: new FormControl ('', [Validators.required, Validators.pattern('[0-9]{2,10}$')])
    })
    this.getAllEmployee();
  }
  get firstname() {
    return this.formValue.get('firstname')
  }
  get lastname() {
    return this.formValue.get('lastname')
  }
  get email() {
    return this.formValue.get('email')
  }
  get mobilenumber() {
    return this.formValue.get('mobilenumber')
  }
  get salary() {
    return this.formValue.get('salary')
  }

  phoneKeyUp(e:any){
		const keyCode = e.keyCode;  
		if (( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) && e.keyCode !=8) {
			e.preventDefault();
		} 	  
  }

  clickAddEmployee() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails() {
    if(this.formValue.valid) {
      this.employeeModelObj = this.formValue.value;
      this.api.postEmployee(this.employeeModelObj).subscribe((result)=>{
        let ref = document.getElementById("closeModal");
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      }, err=> {
        alert("Something Went Wrong.");
      })
    }
  }


  getAllEmployee() {
    this.api.getAllEmployee().subscribe(res=>{
      this.employeeData = res
    })
  }

  deleteEmployee(data:any) {
    console.log(this.employeeData.length);
    if(this.employeeData.length != 1) {
      console.log(this.api.getAllEmployee.length);
      if (confirm("Are You Sure?\nYou want to remove this employee.") == true) {
        this.api.deleteEmployee(data.id).subscribe(res=>{
          this.getAllEmployee();
        })
      }
    } else {
      alert("We Need Atleast One Employee");
    }
  }

  tempId:any;
  onEdit(data:any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.tempId = data.id;
    this.formValue.controls['firstname'].setValue(data.firstname);
    this.formValue.controls['lastname'].setValue(data.lastname);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobilenumber'].setValue(data.mobilenumber);
    this.formValue.controls['salary'].setValue(data.salary);
  }

  updateEmployee() {
    this.employeeModelObj = this.formValue.value;
    this.api.updateEmployee(this.employeeModelObj, this.tempId).subscribe(res=>{
      alert("Updated Successfuly");
      let ref = document.getElementById("closeModal");
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    }, err=> {
      alert("User Not Found!");
    })
  }
}
