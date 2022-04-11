import { TestBed } from '@angular/core/testing';

import { DiscoverGCService } from './discover-gc.service';

describe('DiscoverGCService', () => {
  let service: DiscoverGCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverGCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
