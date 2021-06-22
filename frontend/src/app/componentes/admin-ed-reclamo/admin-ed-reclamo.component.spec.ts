import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdReclamoComponent } from './admin-ed-reclamo.component';

describe('AdminEdReclamoComponent', () => {
  let component: AdminEdReclamoComponent;
  let fixture: ComponentFixture<AdminEdReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEdReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEdReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
