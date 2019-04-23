import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDeletarAssociadoPage } from './atualizar-deletar-associado.page';

describe('AtualizarDeletarAssociadoPage', () => {
  let component: AtualizarDeletarAssociadoPage;
  let fixture: ComponentFixture<AtualizarDeletarAssociadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarDeletarAssociadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarDeletarAssociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
