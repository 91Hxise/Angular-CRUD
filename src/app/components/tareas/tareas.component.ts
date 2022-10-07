import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {


  miTarea: any
  TareaEncontrada: any

  constructor(private listServ : TareasService) { }

  ngOnInit(): void {
  }


  getPositions($event: any){
    this.miTarea = this.listServ.TraerUnaTarea($event)
    this.TareaEncontrada = this.miTarea
  }

  editarTarea(){
    this.listServ.editarTarea(this.TareaEncontrada)
  }
}
