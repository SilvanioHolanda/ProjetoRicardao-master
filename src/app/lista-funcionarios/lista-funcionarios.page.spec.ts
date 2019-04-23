import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuncionariosPage } from './lista-funcionarios.page';

describe('ListaFuncionariosPage', () => {
  let component: ListaFuncionariosPage;
  let fixture: ComponentFixture<ListaFuncionariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFuncionariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
