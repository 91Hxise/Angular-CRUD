import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { ListasTareasComponent } from './components/listas-tareas/listas-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    TareasComponent,
    ListasTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
