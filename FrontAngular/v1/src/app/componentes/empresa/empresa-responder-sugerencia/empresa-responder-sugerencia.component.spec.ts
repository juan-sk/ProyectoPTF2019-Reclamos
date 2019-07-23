import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaResponderSugerenciaComponent } from './empresa-responder-sugerencia.component';

describe('EmpresaResponderSugerenciaComponent', () => {
  let component: EmpresaResponderSugerenciaComponent;
  let fixture: ComponentFixture<EmpresaResponderSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaResponderSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaResponderSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
