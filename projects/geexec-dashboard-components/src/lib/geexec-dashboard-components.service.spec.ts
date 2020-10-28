import { TestBed } from '@angular/core/testing';

import { GeexecDashboardComponentsService } from './geexec-dashboard-components.service';

describe('GeexecDashboardComponentsService', () => {
  let service: GeexecDashboardComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeexecDashboardComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
