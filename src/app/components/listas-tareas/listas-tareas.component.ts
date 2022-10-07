import { Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Tarea } from 'src/app/models/tareas';



@Component({
  selector: 'app-listas-tareas',
  templateUrl: './listas-tareas.component.html',
  styleUrls: ['./listas-tareas.component.css']
})
export class ListasTareasComponent implements OnInit {

  @Output() SendPositions = new EventEmitter; // Envio la posción de la tarea como un evento 
 
  miTarea: Tarea[] = [];

  constructor(private listServ : TareasService) { }

  ngOnInit(): void {
    this.miTarea =  this.listServ.ObtenerTarea()
    console.log("Mis tareas: " , this.miTarea)
  }

  
  deleteTask(_id: any){
    this.listServ.EliminarTarea(_id)
  }

  getPositions(_id: any){
      this.SendPositions.emit(_id)
  }
  

}
