import { TestBed } from '@angular/core/testing';

import { ReclamosclienteService } from './reclamoscliente.service';

describe('ReclamosclienteService', () => {
  let service: ReclamosclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamosclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
