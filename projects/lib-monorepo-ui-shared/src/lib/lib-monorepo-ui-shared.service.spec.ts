import { TestBed } from '@angular/core/testing';

import { LibMonorepoUISharedService } from './lib-monorepo-ui-shared.service';

describe('LibMonorepoUISharedService', () => {
  let service: LibMonorepoUISharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibMonorepoUISharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
