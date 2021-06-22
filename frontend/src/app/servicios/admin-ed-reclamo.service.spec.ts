import { TestBed } from '@angular/core/testing';

import { AdminEdReclamoService } from './admin-ed-reclamo.service';

describe('AdminEdReclamoService', () => {
  let service: AdminEdReclamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEdReclamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
