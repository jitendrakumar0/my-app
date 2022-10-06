import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/users";
  url2 = "https://my-json-server.typicode.com/jitendrakumar0/my-app-db/users";
  users() {
    return this.http.get(this.url);
  }
  saveUsers(data:any) {
    return this.http.post(this.url, data)
  }
}
