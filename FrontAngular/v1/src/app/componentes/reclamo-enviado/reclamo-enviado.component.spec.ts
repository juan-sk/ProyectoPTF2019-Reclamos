import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoEnviadoComponent } from './reclamo-enviado.component';

describe('ReclamoEnviadoComponent', () => {
  let component: ReclamoEnviadoComponent;
  let fixture: ComponentFixture<ReclamoEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
