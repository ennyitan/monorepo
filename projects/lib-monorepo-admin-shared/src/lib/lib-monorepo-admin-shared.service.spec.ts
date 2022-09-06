import { TestBed } from '@angular/core/testing';

import { LibMonorepoAdminSharedService } from './lib-monorepo-admin-shared.service';

describe('LibMonorepoAdminSharedService', () => {
  let service: LibMonorepoAdminSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibMonorepoAdminSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
