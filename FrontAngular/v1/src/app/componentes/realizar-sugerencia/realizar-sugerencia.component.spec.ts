import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarSugerenciaComponent } from './realizar-sugerencia.component';

describe('RealizarSugerenciaComponent', () => {
  let component: RealizarSugerenciaComponent;
  let fixture: ComponentFixture<RealizarSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
