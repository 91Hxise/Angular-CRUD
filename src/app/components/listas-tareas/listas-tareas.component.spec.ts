import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasTareasComponent } from './listas-tareas.component';

describe('ListasTareasComponent', () => {
  let component: ListasTareasComponent;
  let fixture: ComponentFixture<ListasTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
