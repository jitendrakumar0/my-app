import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmployee(data:any) {
    return this.http.post<any>("http://localhost:3000/employees/", data)
    .pipe(map((result:any)=>{
      return result;
    }))
  }

  getAllEmployee() {
    return this.http.get("http://localhost:3000/employees/")
  }

  deleteEmployee(id:number) {
    return this.http.delete<any>("http://localhost:3000/employees/"+id)
    .pipe(map((result:any)=>{
      return result;
    }))
  }

  updateEmployee(data:any, id:number) {
    return this.http.put<any>("http://localhost:3000/employees/"+id, data)
    .pipe(map((result:any)=>{
      return result;
    }))
  }

}
