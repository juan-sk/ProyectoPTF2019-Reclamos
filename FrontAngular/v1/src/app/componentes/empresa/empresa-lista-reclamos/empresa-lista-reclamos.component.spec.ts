import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaListaReclamosComponent } from './empresa-lista-reclamos.component';

describe('EmpresaListaReclamosComponent', () => {
  let component: EmpresaListaReclamosComponent;
  let fixture: ComponentFixture<EmpresaListaReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaListaReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaListaReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
