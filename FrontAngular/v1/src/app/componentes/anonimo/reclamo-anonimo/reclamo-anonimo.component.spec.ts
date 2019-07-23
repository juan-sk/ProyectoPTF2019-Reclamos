import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoAnonimoComponent } from './reclamo-anonimo.component';

describe('ReclamoAnonimoComponent', () => {
  let component: ReclamoAnonimoComponent;
  let fixture: ComponentFixture<ReclamoAnonimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoAnonimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
