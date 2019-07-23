import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAnonimoComponent } from './busqueda-anonimo.component';

describe('BusquedaAnonimoComponent', () => {
  let component: BusquedaAnonimoComponent;
  let fixture: ComponentFixture<BusquedaAnonimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaAnonimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
