import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerUsuariosComponent } from './admin-ver-usuarios.component';

describe('AdminVerUsuariosComponent', () => {
  let component: AdminVerUsuariosComponent;
  let fixture: ComponentFixture<AdminVerUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVerUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
