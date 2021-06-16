import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVerReclamosComponent } from './cliente-ver-reclamos.component';

describe('ClienteVerReclamosComponent', () => {
  let component: ClienteVerReclamosComponent;
  let fixture: ComponentFixture<ClienteVerReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteVerReclamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVerReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
