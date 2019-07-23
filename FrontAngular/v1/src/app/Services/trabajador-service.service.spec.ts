import { TestBed } from '@angular/core/testing';

import { TrabajadorServiceService } from './trabajador-service.service';

describe('TrabajadorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrabajadorServiceService = TestBed.get(TrabajadorServiceService);
    expect(service).toBeTruthy();
  });
});
