import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  allUsers = [
    {name:"Kuchbhi", age:23, email:"kuchbhi@gmail.com"},
    {name:"Kuchbhi 3", age:23, email:"kuchbhi3@gmail.com"},
    {name:"Kuchbhi 6", age:23, email:"kuchbhi6@gmail.com"},
    {name:"Kuchbhi 9", age:23, email:"kuchbhi9@gmail.com"},
    {name:"Kuchbhi 4", age:23, email:"kuchbhi4@gmail.com"},
    {name:"Kuchbhi 2", age:23, email:"kuchbhi2@gmail.com"},
    {name:"Kuchbhi 7", age:23, email:"kuchbhi7@gmail.com"},
    {name:"Kuchbhi 8", age:23, email:"kuchbhi8@gmail.com"},
  ]

  socials = [
    {name:"Facebook", url:"https://facebook.com/kuchbhi"},
    {name:"Instagram", url:"https://instagram.com/kuchbhi"},
    {name:"Linkedin", url:"https://linkedin.com/kuchbhi"},
  ]

  headerMenu = [
    {name:"Home", status:true},
    {name:"About Us", status:true},
    {name:"Contact Us", status:true},
    {name:"Blogs", status:true},
    {name:"Portfolio", status:true},
    {name:"Services", status:true},
    {name:"Map", status:  false},
  ]

  constructor() { }
}
