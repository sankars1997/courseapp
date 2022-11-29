import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[{
  path:"",
  component:AddcourseComponent

},
{
path:"view",
component:ViewComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
