import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarReclamoComponent } from './realizar-reclamo.component';

describe('RealizarReclamoComponent', () => {
  let component: RealizarReclamoComponent;
  let fixture: ComponentFixture<RealizarReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
