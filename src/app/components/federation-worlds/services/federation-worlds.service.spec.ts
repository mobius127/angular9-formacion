import { TestBed } from '@angular/core/testing';

import { FederationWorldsService } from './federation-worlds.service';

describe('FederationWorldsService', () => {
  let service: FederationWorldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FederationWorldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
