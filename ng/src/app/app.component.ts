import { Component } from '@angular/core';
import studentsData from '../assets/data.json';
  
interface Student {

  nombre: String;
  libros: Array<string>;

}
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  students: Student[] = studentsData;

}
