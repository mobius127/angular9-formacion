import { TestBed } from '@angular/core/testing';

import { StarShipService } from './star-ship.service';

describe('StarShipService', () => {
  let service: StarShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
