import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  miId = 7

  nuevaTarea = {
    id: this.miId,
    titulo : '',
    descripcion: ''
  }

  constructor(private listServ: TareasService) { }

  ngOnInit(): void {
  }

  AgregarTarea(){
    console.log("Enviaremos el mensaje" , this.nuevaTarea)
    this.listServ.AgregarTarea(this.nuevaTarea)
     this.miId ++;
     this.nuevaTarea = {
      id: 0 ,
      titulo : '',
      descripcion: ''
    }
  }

}
