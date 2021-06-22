import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerReclamosComponent } from './admin-ver-reclamos.component';

describe('AdminVerReclamosComponent', () => {
  let component: AdminVerReclamosComponent;
  let fixture: ComponentFixture<AdminVerReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVerReclamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
