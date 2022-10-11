import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmployee(data:any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((result:any)=>{
      return result;
    }))
  }

  getAllEmployee() {
    return this.http.get("http://localhost:3000/posts")
  }

}
