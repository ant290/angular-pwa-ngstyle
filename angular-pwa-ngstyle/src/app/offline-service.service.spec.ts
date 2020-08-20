import { TestBed } from '@angular/core/testing';

import { OfflineServiceService } from './offline-service.service';

describe('OfflineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineServiceService = TestBed.get(OfflineServiceService);
    expect(service).toBeTruthy();
  });
});
