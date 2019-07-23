import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaIdComponent } from './busqueda-id.component';

describe('BusquedaIdComponent', () => {
  let component: BusquedaIdComponent;
  let fixture: ComponentFixture<BusquedaIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
