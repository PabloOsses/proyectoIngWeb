import { TestBed } from '@angular/core/testing';

import { CrearclienteService } from './crearcliente.service';

describe('CrearclienteService', () => {
  let service: CrearclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
