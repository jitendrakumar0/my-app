import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: "" , component:HomeComponent},
  {
    path: "about",
    component:AboutComponent,
    children:[
      {path:"me" , component:AboutMeComponent},
      {path:"company" , component:AboutCompanyComponent},
    ]
  },
  {path: "contact" , component:ContactComponent},
  {path: "user/:id" , component:UserComponent},
  {path: "**" , component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
