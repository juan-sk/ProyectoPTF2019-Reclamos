import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarReclamoEmbebidaComponent } from './realizar-reclamo-embebida.component';

describe('RealizarReclamoEmbebidaComponent', () => {
  let component: RealizarReclamoEmbebidaComponent;
  let fixture: ComponentFixture<RealizarReclamoEmbebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarReclamoEmbebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarReclamoEmbebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
