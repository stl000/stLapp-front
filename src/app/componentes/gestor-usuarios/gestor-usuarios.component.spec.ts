import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorUsuariosComponent } from './gestor-usuarios.component';

describe('GestorUsuariosComponent', () => {
  let component: GestorUsuariosComponent;
  let fixture: ComponentFixture<GestorUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorUsuariosComponent]
    });
    fixture = TestBed.createComponent(GestorUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
