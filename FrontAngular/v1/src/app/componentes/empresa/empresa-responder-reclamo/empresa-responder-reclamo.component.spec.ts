import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaResponderReclamoComponent } from './empresa-responder-reclamo.component';

describe('EmpresaResponderReclamoComponent', () => {
  let component: EmpresaResponderReclamoComponent;
  let fixture: ComponentFixture<EmpresaResponderReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaResponderReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaResponderReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
