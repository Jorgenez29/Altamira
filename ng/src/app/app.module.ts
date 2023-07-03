import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AlumnosComponentComponent } from './alumnos-component/alumnos-component.component';
import { LibrosComponentComponent } from './libros-component/libros-component.component';
import { ConsLibrosComponentComponent } from './cons-libros-component/cons-libros-component.component';
import { ConsAlumnosComponentComponent } from './cons-alumnos-component/cons-alumnos-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
    {path:'', component:HomeComponentComponent},
    {path:'alumnos', component:AlumnosComponentComponent},
    {path:'libros', component:LibrosComponentComponent},
    {path:'consultaAlumnos', component:ConsAlumnosComponentComponent},
    {path:'consultaLibros', component:ConsLibrosComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AlumnosComponentComponent,
    LibrosComponentComponent,
    ConsLibrosComponentComponent,
    ConsAlumnosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
