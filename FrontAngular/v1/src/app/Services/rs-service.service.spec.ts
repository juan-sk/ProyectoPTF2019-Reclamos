import { TestBed } from '@angular/core/testing';

import { RsServiceService } from './rs-service.service';

describe('RsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsServiceService = TestBed.get(RsServiceService);
    expect(service).toBeTruthy();
  });
});
