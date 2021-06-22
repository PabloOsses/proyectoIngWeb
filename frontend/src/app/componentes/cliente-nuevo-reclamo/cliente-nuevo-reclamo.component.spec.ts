import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNuevoReclamoComponent } from './cliente-nuevo-reclamo.component';

describe('ClienteNuevoReclamoComponent', () => {
  let component: ClienteNuevoReclamoComponent;
  let fixture: ComponentFixture<ClienteNuevoReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteNuevoReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteNuevoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
