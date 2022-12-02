import { TestBed } from '@angular/core/testing';

import { AutoLogOfServiceService } from './auto-log-of-service.service';

describe('AutoLogOfServiceService', () => {
  let service: AutoLogOfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLogOfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
