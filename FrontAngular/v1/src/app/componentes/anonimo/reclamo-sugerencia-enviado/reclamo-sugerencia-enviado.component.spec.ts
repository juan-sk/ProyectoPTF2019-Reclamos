import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoSugerenciaEnviadoComponent } from './reclamo-sugerencia-enviado.component';

describe('ReclamoSugerenciaEnviadoComponent', () => {
  let component: ReclamoSugerenciaEnviadoComponent;
  let fixture: ComponentFixture<ReclamoSugerenciaEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoSugerenciaEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoSugerenciaEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
