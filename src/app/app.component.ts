import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'App-tareas';

employees = [

  {'name':'Miguel', position:'Developer', email:''},
  {'name':'Samuel', position:'Designer', email:''},
  {'name':'Abraham', position:'Manager', email:''}
];


// Crear un objeto vacio para almacenar los datos del formulario
model:any = {};


// 1. Crear un metodo para agregar un empleado
  addEmployee():void{
    this.employees.push(this.model);
    console.log(this.model);
    this.model = {};

  }

// 2. Crear un metodo para eliminar un empleado
  deleteEmployee():void{
    

  }

// 3. Crear un metodo para editar un empleado
  editEmployee():void{



  }

// 4. Crear un metodo para actualizar un empleado
  updateEmployee():void{

    

  }

// 5. Crear un metodo para limpiar el formulario
  cleanForm():void{
    this.model = {};

  }
  



}
