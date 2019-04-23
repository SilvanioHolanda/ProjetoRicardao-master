import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAssociadosPage } from './listar-associados.page';

describe('ListarAssociadosPage', () => {
  let component: ListarAssociadosPage;
  let fixture: ComponentFixture<ListarAssociadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAssociadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAssociadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
