import { Injectable } from '@angular/core';

import { Tarea } from '../models/tareas';

const ListaTareas = [
  {
    "id" : 1,
    "titulo" : "Amar al amor de mi vida por siempre y para siempre",
    "descripcion" : "Amar a Isabella Hurtado Mejía por toda la eternidad y toda la existencia del universo porque la amo muchisímo"
  },
  {
    "id" : 2,
    "titulo" : "Casarme con el amor de mi vida",
    "descripcion" : "Tenemos que casarnos para que el amor de mi vida definitivamente sea mi esposa :)"
  },
  {
    "id" : 3,
    "titulo" : "Adoptar gaticos con mi esposa hermosa",
    "descripcion" : "Debemos adoptar dos gaticos para siempre"
  }, {
    "id" : 4,
    "titulo" : "Irnos a vivir juntos",
    "descripcion" : "Debemos irnos a vivir juntos el amor de mi vida y yo para estar todos los días juntos"
  }, {
    "id" : 5,
    "titulo" : "Hacer el amor todos los días",
    "descripcion" : "Hacer todos los días el amor con mi esposa hermosa porque ella lo hace muy rico :)"
  }, {
    "id" : 6,
    "titulo" : "Despertar todos los días viendo a mi esposa preciosa",
    "descripcion" : "Es que te lo juro que ella es demasiado hermosa dios mio"
  },
]

@Injectable({
  providedIn: 'root'
})

export class TareasService {

  constructor() { }

  ObtenerTarea() {
    return ListaTareas;
  }

  TraerUnaTarea(_id: any){
    return ListaTareas.find(ListaTareas =>ListaTareas.id === _id)
  }

  AgregarTarea (Tarea : Tarea){
    ListaTareas.push(Tarea); 
  }

  editarTarea(nuevaTareaEdit: any){
    const index = ListaTareas.findIndex(Tarea => Tarea.id === nuevaTareaEdit.id)

    ListaTareas[index]= nuevaTareaEdit;
  }

  EliminarTarea(_id: any){
    ListaTareas.splice(_id, 1)
  }
}
