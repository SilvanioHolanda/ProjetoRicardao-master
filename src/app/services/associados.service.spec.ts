import { TestBed } from '@angular/core/testing';

import { AssociadosService } from './associados.service';

describe('AssociadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociadosService = TestBed.get(AssociadosService);
    expect(service).toBeTruthy();
  });
});
