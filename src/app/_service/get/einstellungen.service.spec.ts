import { TestBed } from '@angular/core/testing';

import { EinstellungenService } from './get.service';

describe('EinstellungenService', () => {
  let service: EinstellungenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EinstellungenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
