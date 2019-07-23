import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaListaSugerenciasComponent } from './empresa-lista-sugerencias.component';

describe('EmpresaListaSugerenciasComponent', () => {
  let component: EmpresaListaSugerenciasComponent;
  let fixture: ComponentFixture<EmpresaListaSugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaListaSugerenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaListaSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
