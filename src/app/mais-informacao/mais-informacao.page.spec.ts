import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisInformacaoPage } from './mais-informacao.page';

describe('MaisInformacaoPage', () => {
  let component: MaisInformacaoPage;
  let fixture: ComponentFixture<MaisInformacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisInformacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisInformacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
