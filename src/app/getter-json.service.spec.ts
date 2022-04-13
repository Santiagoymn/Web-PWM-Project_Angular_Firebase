import { TestBed } from '@angular/core/testing';

import { GetterJsonService } from './getter-json.service';

describe('GetterJsonService', () => {
  let service: GetterJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetterJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
