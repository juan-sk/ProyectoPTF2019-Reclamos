import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciaAnonimoComponent } from './sugerencia-anonimo.component';

describe('SugerenciaAnonimoComponent', () => {
  let component: SugerenciaAnonimoComponent;
  let fixture: ComponentFixture<SugerenciaAnonimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciaAnonimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciaAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
