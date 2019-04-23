import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticarLoginGuard } from './autenticar-login.guard';

describe('AutenticarLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticarLoginGuard]
    });
  });

  it('should ...', inject([AutenticarLoginGuard], (guard: AutenticarLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
