import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponentsComponent } from './all-components/all-components.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  {path:"", component:AllComponentsComponent},
  {path:"accordion", component:AccordionComponent},
  {path:"alert", component:AlertComponent},


  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
