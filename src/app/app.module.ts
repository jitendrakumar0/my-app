import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllComponentsComponent } from './all-components/all-components.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponentsComponent,
    HeaderComponent,
    AccordionComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
