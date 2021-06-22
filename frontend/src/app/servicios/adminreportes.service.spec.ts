import { TestBed } from '@angular/core/testing';

import { AdminreportesService } from './adminreportes.service';

describe('AdminreportesService', () => {
  let service: AdminreportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminreportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
